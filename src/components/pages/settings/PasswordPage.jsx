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
import { changePassword } from '../../../actions/passwordChangeActions.js';

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
    return (
      <section className="auth-form">
        <PasswordForm onSubmit={ this.handleSubmit } inProgress={ false } />
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