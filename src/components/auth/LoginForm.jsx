import React, {createClass} from 'react';
import {Field, reduxForm} from 'redux-form';
import {notEmpty} from '../../utils/form_validations.js'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className={error ? "form-group has-error" : "form-group"}>
    <div className="input-field">
      <input {...input} placeholder={label} type={type} className="form-control" />
      { touched && (error && <span className="error-msg">{error}</span>) }
    </div>
  </div>
);

const LoginForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field 
        type="email" 
        component={renderField}
        name="email" 
        placeholder="E-mail"
        validate={notEmpty} />
      <Field 
        type="password" 
        component={renderField}
        name="password" 
        placeholder="Пароль"
        validate={notEmpty} />
      <button type="submit" className="btn btn-primary">Войти</button>
    </form>  
  );
};

export default reduxForm({
  form : 'login-form'
})(LoginForm);