import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Add Items to Project" />
            <TextField
              placeholder="Enter Item Number"
              label="Item Number"
              onChange={handleChange('item_number')}
              defaultValue={values.item_number}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Vendor"
              label="Vendor"
              onChange={handleChange('vendor')}
              defaultValue={values.vendor}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Quantity"
              label="Quantity"
              onChange={handleChange('quantity')}
              defaultValue={values.quantity}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Description"
              label="Description"
              onChange={handleChange('description')}
              defaultValue={values.description}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Unit Cost"
              label="Unit Cost"
              onChange={handleChange('unit_cost')}
              defaultValue={values.unit_cost}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Unit Sales Price"
              label="Unit Sales Price"
              onChange={handleChange('unit_sales_price')}
              defaultValue={values.unit_sales_price}
              margin="normal"
              fullWidth
            />
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
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
