import React, { Component, PropTypes } from 'react';
import AccountForm from './AccountForm';
import { connect } from 'react-redux';
import { updateUserProfile } from '../../../actions/updateProfileActions.js';
import AlertBox from '../../common/AlertBox';
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
    const { inProgress, errorMsg } = this.props;

    return (
      <section className="auth-form">
        { isEmpty(errorMsg) ? '' : <AlertBox error={errorMsg} /> }
        <AccountForm onSubmit={ this.handleSubmit } inProgress={ inProgress } />
      </section>);
  }
}

Account.propTypes = {
  updateProfile: PropTypes.func.isRequired,
  inProgress: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired,
};

const mapStateToProps = ({ updateProfile }) => ({
  inProgress: updateProfile.inProgress,
  errorMsg: updateProfile.errorMsg,
});

const mapDispatchToProps = (dispatch) => ({
  updateProfile: data => dispatch(updateUserProfile(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);