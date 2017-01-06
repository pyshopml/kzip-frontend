/* ------------------------------------------------------------------------------
* SignupForm.jsx
*
* Signup Form component
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import React, {createClass} from 'react';
import {Field, reduxForm} from 'redux-form';
import {notEmpty, minLength, passwordEqual, withoutSpecialChars} from '../../utils/form_validations.js';
import RenderField from './RenderField.jsx';
import {Spinner} from 'elemental';

const SignupForm = ({handleSubmit, inProgress}) => {

  return (
    <form onSubmit={handleSubmit}>
      <Field 
        type="text" 
        component={RenderField}
        name="name" 
        placeholder="Имя"
        validate={[ notEmpty, minLength(6), withoutSpecialChars ]} />

      <Field 
        type="email" 
        component={RenderField}
        name="email" 
        placeholder="E-mail"
        validate={[ notEmpty ]} />

      <Field 
        type="password" 
        component={RenderField}
        name="password" 
        placeholder="Пароль"
        validate={[ notEmpty, minLength(6) ]} />

      <Field 
        type="password" 
        component={RenderField}
        name="passwordConfirmation" 
        placeholder="Пароль еще раз"
        validate={[ notEmpty, passwordEqual ]} />

      <button className="btn btn-primary">
        { inProgress ? <Spinner type="inverted" /> : "Зарегистрироваться" }
      </button>
    </form>
  );

};

export default reduxForm({
  form : 'signup-form'
})(SignupForm);