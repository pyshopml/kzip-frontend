import React, {createClass} from 'react';
import {Field, reduxForm} from 'redux-form';
import {notEmpty, minLength, passwordEqual} from '../../utils/form_validations.js'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className={error ? "form-group has-error" : "form-group"}>
    <div className="input-field">
      <input {...input} placeholder={label} type={type} className="form-control" />
      { touched && (error && <span className="error-msg">{error}</span>) }
    </div>
  </div>
);

const SignupForm = ({handleSubmit}) => {

  return (
    <form onSubmit={handleSubmit}>
      <Field 
        type="text" 
        component={renderField}
        name="name" 
        placeholder="Имя"
        validate={[ notEmpty, minLength(6) ]} />

      <Field 
        type="email" 
        component={renderField}
        name="email" 
        placeholder="E-mail"
        validate={[ notEmpty ]} />

      <Field 
        type="password" 
        component={renderField}
        name="password" 
        placeholder="Пароль"
        validate={[ notEmpty, minLength(6) ]} />

      <Field 
        type="password" 
        component={renderField}
        name="passwordConfirmation" 
        placeholder="Пароль еще раз"
        validate={[ notEmpty, passwordEqual ]} />

      <button className="btn btn-primary">Зарегистрироваться</button>
    </form>
  );

};

export default reduxForm({
  form : 'signup-form'
})(SignupForm);