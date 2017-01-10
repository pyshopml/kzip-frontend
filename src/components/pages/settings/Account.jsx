import React, { Component } from 'react';
import AccountForm from './AccountForm';
import { connect } from 'react-redux';
import { updateUserProfile } from '../../../actions/updateProfileActions.js';

class Account extends Component {
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(vals) {
    this.props.updateProfile(vals);
  }

  render() {
    return (
      <section className="auth-form">
        <AccountForm onSubmit={ this.handleSubmit } />
      </section>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateProfile: data => dispatch(updateUserProfile(data))
});

export default connect(null, mapDispatchToProps)(Account);