import React, { Component } from 'react';
import AccountForm from './AccountForm';

class Account extends Component {
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(vals) {
    console.log(vals);
  }

  render() {
    return (
      <section className="auth-form">
        <AccountForm onSubmit={this.handleSubmit} />
      </section>);
  }
}

export default Account;