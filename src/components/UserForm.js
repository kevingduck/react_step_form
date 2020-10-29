import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import Confirm from './Confirm';
import Success from './Success';

const creation_date = new Date();

export class UserForm extends Component {
  state = {
    step: 1,
    customer_name: '',
    shipping_address: '',
    email: '',
    creation_date: creation_date.toDateString(),
    project_code: ''
    // item_number: '',
    // vendor: '',
    // quantity: '',
    // description: '',
    // unit_cost: '',
    // unit_sales_price: '',
  };

  // Proceed to next step
  nextStep = () => {
    const { step, project_code, customer_name } = this.state;
    this.setState({
      step: step + 1,
      project_code: customer_name.substring(0,4).toUpperCase() + "-test123" 
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    
    const { 
      customer_name, 
      shipping_address, 
      email,
      due_date,
      creation_date,
      project_code
      // item_number, 
      // vendor, 
      // quantity, 
      // description, 
      // unit_cost,
      // unit_sales_price 
    } = this.state;

    const values = { 
      customer_name, 
      shipping_address, 
      email,
      due_date,
      creation_date,
      project_code
      // item_number, 
      // vendor, 
      // quantity, 
      // description, 
      // unit_cost, 
      // unit_sales_price 
    };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 3:
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;
