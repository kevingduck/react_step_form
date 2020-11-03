import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

export class Success extends Component {
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
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open={open}
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Success" />
            <h1>Project Created</h1>
            <p>Select Project from table to add Items</p>
            <Button onClick={handleClose} color="primary">
              Cancel
          </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
