import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'ramda';
import AccountForm from './AccountForm';
import { updateUserProfile } from './actions';
import AlertBox from '../../components/AlertBox';
import SuccessBox from '../../components/SuccessBox';

import css from './style.scss';

class Account extends Component {
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(vals) {
    this.props.updateProfile(vals);
  }

  render() {
    const { inProgress, errorMsg, successMsg } = this.props;

    return (
      <section className={ css.auth_form }>
        <AlertBox error={ errorMsg } />
        <SuccessBox msg={ successMsg } />
        <AccountForm onSubmit={ this.handleSubmit } inProgress={ inProgress } />
      </section>);
  }
}

Account.propTypes = {
  updateProfile: PropTypes.func.isRequired,
  inProgress: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired,
  successMsg: PropTypes.string.isRequired
};

const mapStateToProps = ({ global: { account } }) => ({
  inProgress: account.inProgress,
  errorMsg: account.errorMsg,
  successMsg: account.successMsg
});

const mapDispatchToProps = (dispatch) => ({
  updateProfile: data => dispatch(updateUserProfile(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);