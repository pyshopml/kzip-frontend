/* ------------------------------------------------------------------------------
* PasswordPage
*
* tab for changing user's password
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import React, { Component, PropTypes } from 'react';
import PasswordForm from './PasswordForm';
import { connect } from 'react-redux';
import AlertBox from '../../common/AlertBox';
import SuccessBox from '../../common/SuccessBox';
import changePassword from '../../../actions/passwordChangeActions.js';
import { isEmpty } from 'ramda';

class PasswordPage extends Component {
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(vals) {
    console.log(vals);
    this.props.changePassword(vals);
  }

  render () {
    const { inProgress, errorMsg, successMsg } = this.props;

    return (
      <section className="auth-form">
        <AlertBox error={ errorMsg } />
        <SuccessBox msg={ successMsg } />
        <PasswordForm onSubmit={ this.handleSubmit } inProgress={ inProgress } />
      </section>
    );
  }
};

PasswordPage.propTypes = {
  inProgress: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired,
  successMsg: PropTypes.string.isRequired,
  changePassword: PropTypes.func.isRequired,
};

const mapStateToProps = ({ password }) => ({
  inProgress: password.inProgress,
  errorMsg: password.errorMsg,
  successMsg: password.successMsg,
});

const mapDispatchToProps = (dispatch) => ({
  changePassword: (vals) => dispatch(changePassword(vals))
})

export default connect(mapStateToProps, mapDispatchToProps)(PasswordPage);