/* ------------------------------------------------------------------------------
* PasswordForm.jsx
*
* form for changing user's password
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Spinner } from 'elemental';
import { notEmpty, passwordEqual } from '../../../utils/form_validations';
import firebase from '../../../utils/auth';
import RenderField from '../../common/RenderField';

const PasswordForm = ({ handleSubmit, inProgress }) => (
  <form onSubmit={ handleSubmit }> 
    <Field
      type="password"
      component={RenderField}
      name="password"
      placeholder="E-mail"
      validate={ notEmpty }
    />
    <Field
      type="password"
      component={RenderField}
      name="passwordConfirmation"
      placeholder="Пароль"
      validate={ [ notEmpty, passwordEqual ] }
    />
    <button type="submit" className="btn btn-primary">
      { inProgress ? <Spinner type="inverted" /> : 'Войти' }
    </button>
  </form>
);

PasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  inProgress: PropTypes.bool,
};

export default reduxForm({
  form: 'password-form',
})(PasswordForm);