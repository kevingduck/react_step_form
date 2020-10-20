import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { customer_name, shipping_address, email, item_number, vendor, quantity, description, unit_cost, unit_sales_price }
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
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
                <ListItemText primary="Item Number" secondary={item_number} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Vendor" secondary={vendor} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Quantity" secondary={quantity} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Description" secondary={description} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Unit Cost" secondary={unit_cost} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Unit Sales Price" secondary={unit_sales_price} />
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
