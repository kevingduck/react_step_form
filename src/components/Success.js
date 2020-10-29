import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

export class Success extends Component {
  continue = e => {
    debugger
    e.preventDefault();
    const { data } = this.props;

    if (window.confirm("Ready to save?" + data)) {
      fetch('./.netlify/functions/projects', {
        method: 'POST',
        body: data,
      });
      console.log('created' + data);
    };
    // e.target.reset();    
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Success" />
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions.</p>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
