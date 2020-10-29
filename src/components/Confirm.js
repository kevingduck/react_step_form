import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    const { values } = this.props;

    if (window.confirm("Create New Project?" + JSON.stringify(values))) {
      fetch('./.netlify/functions/project', {
        method: 'POST',
        body: JSON.stringify(values),
      });
      console.log('created' + values);
    };
  
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { 
        customer_name, 
        shipping_address, 
        email, 
        due_date,
        creation_date,
        project_code
      }
    } = this.props;
    
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <List>
              <ListItem>
                <ListItemText primary="Customer" secondary={customer_name} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Shipping Address" secondary={shipping_address} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Due Date" secondary={due_date} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Creation Date" secondary={creation_date} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Project Code" secondary={project_code} />
              </ListItem>
            </List>
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm & Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
