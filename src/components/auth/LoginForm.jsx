/* ------------------------------------------------------------------------------
* LoginForm.jsx
*
* Form component for Login page
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import React, {createClass} from 'react';
import {Field, reduxForm} from 'redux-form';
import {notEmpty} from '../../utils/form_validations.js'
import RenderField from './RenderField.jsx';
import {Spinner} from 'elemental';

const LoginForm = ({handleSubmit, inProgress}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field 
        type="email" 
        component={RenderField}
        name="email" 
        placeholder="E-mail"
        validate={notEmpty} />
      <Field 
        type="password" 
        component={RenderField}
        name="password" 
        placeholder="Пароль"
        validate={notEmpty} />
      <button type="submit" className="btn btn-primary">
        { inProgress ?  <Spinner type="inverted" /> : "Войти" }
      </button>
    </form>  
  );
};

export default reduxForm({
  form : 'login-form'
})(LoginForm);