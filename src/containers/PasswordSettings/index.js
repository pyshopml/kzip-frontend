/* ------------------------------------------------------------------------------
* PasswordPage
*
* tab for changing user's password
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'ramda';
import Form from './Form';
import AlertBox from '../../components/AlertBox';
import SuccessBox from '../../components/SuccessBox';
import { changePassword } from './actions';

import css from './style.scss';

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
      <section className={ css.auth_form }>
        <AlertBox error={ errorMsg } />
        <SuccessBox msg={ successMsg } />
        <Form onSubmit={ this.handleSubmit } inProgress={ inProgress } />
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

const mapStateToProps = ({ global: { password } }) => ({
  inProgress: password.inProgress,
  errorMsg: password.errorMsg,
  successMsg: password.successMsg,
});

const mapDispatchToProps = (dispatch) => ({
  changePassword: (vals) => dispatch(changePassword(vals))
})

export default connect(mapStateToProps, mapDispatchToProps)(PasswordPage);