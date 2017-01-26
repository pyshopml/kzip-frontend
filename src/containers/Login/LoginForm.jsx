/* ------------------------------------------------------------------------------
* LoginForm.jsx
*
* Form component for Login page
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Spinner } from 'elemental';
import { notEmpty } from '../../utils/form_validations';
import RenderField from '../../components/RenderField';

const LoginForm = ({ handleSubmit, inProgress }) => (
  <form onSubmit={ handleSubmit }> 
    <Field
      type="email"
      component={RenderField}
      name="email"
      placeholder="E-mail"
      validate={notEmpty}
    />
    <Field
      type="password"
      component={RenderField}
      name="password"
      placeholder="Пароль"
      validate={notEmpty}
    />
    <button type="submit" className="btn btn-primary">
      { inProgress ? <Spinner type="inverted" /> : 'Войти' }
    </button>
  </form>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  inProgress: PropTypes.bool,
};

export default reduxForm({
  form: 'login-form',
})(LoginForm);
