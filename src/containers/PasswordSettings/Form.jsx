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
import { notEmpty } from '../../utils/form_validations';
import firebase from '../../utils/auth';
import RenderField from '../../components/RenderField';

const passwordEqual = (value, { newPassword, newPasswordConfirmation }) => (
  newPassword === newPasswordConfirmation ? undefined : 'Пароли должны совпадать'
);

const PasswordForm = ({ handleSubmit, inProgress }) => (
  <form onSubmit={ handleSubmit }> 
    <Field
      type="password"
      component={ RenderField }
      name="oldPassword"
      label="Старый пароль"
      validate={ notEmpty }
    />

    <Field
      type="password"
      component={ RenderField }
      name="newPassword"
      label="Новый пароль"
      validate={ notEmpty }
    />

    <Field
      type="password"
      component={ RenderField }
      name="newPasswordConfirmation"
      label="Новый пароль ещё раз"
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