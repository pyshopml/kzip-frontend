/* ------------------------------------------------------------------------------
* SignupForm.jsx
*
* Signup Form component
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Spinner } from 'elemental';
import { notEmpty, minLength, passwordEqual, withoutSpecialChars } from '../../utils/form_validations';
import RenderField from './RenderField';

const SignupForm = ({ handleSubmit, inProgress }) => (
  <form onSubmit={handleSubmit}>
    <Field
      type="text"
      component={RenderField}
      name="name"
      placeholder="Имя"
      validate={[notEmpty, minLength(6), withoutSpecialChars]}
    />

    <Field
      type="email"
      component={RenderField}
      name="email"
      placeholder="E-mail"
      validate={[notEmpty]}
    />

    <Field
      type="password"
      component={RenderField}
      name="password"
      placeholder="Пароль"
      validate={[notEmpty, minLength(6)]}
    />

    <Field
      type="password"
      component={RenderField}
      name="passwordConfirmation"
      placeholder="Пароль еще раз"
      validate={[notEmpty, passwordEqual]}
    />

    <button className="btn btn-primary">
      { inProgress ? <Spinner type="inverted" /> : 'Зарегистрироваться' }
    </button>
  </form>
);

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  inProgress: PropTypes.bool,
};

export default reduxForm({
  form: 'signup-form',
})(SignupForm);
