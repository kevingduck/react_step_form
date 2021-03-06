import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  close = e => {
    e.preventDefault();
    this.setState({show:false});
  };

  state = {
    show: true,
  };
  
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open = {this.state.show}
            fullWidth
            maxWidth='sm'
          >
            <h1>Create New Project</h1>
            <TextField
              placeholder="Enter Customer Name"
              label="Customer Name"
              onChange={handleChange('customer_name')}
              defaultValue={values.customer_name}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Shipping Address"
              label="Shipping Address"
              onChange={handleChange('shipping_address')}
              defaultValue={values.shipping_address}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Customer Email"
              label="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
            <TextField
              label="Due Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange('due_date')}
              defaultValue={values.due_date}
              margin="normal"
              fullWidth
            />
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={this.close}
            >Close</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
