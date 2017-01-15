import React, { Component, PropTypes } from 'react';
import AccountForm from './AccountForm';
import { connect } from 'react-redux';
import updateUserProfile from '../../../actions/updateProfileActions.js';
import AlertBox from '../../common/AlertBox';
import SuccessBox from '../../common/SuccessBox';
import { isEmpty } from 'ramda';

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
      <section className="auth-form">
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

const mapStateToProps = ({ updateProfile }) => ({
  inProgress: updateProfile.inProgress,
  errorMsg: updateProfile.errorMsg,
  successMsg: updateProfile.successMsg
});

const mapDispatchToProps = (dispatch) => ({
  updateProfile: data => dispatch(updateUserProfile(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);