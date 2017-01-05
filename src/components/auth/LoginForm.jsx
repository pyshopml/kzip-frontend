import React, {createClass} from 'react';
import {Field, reduxForm} from 'redux-form';

// validations
const required = value => value ? undefined : 'Необходимо'

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
        validate={required} />
      <Field 
        type="password" 
        component={renderField}
        name="password" 
        placeholder="Пароль"
        validate={required} />
      <button type="submit" className="btn btn-primary">Войти</button>
    </form>  
  );
};

export default reduxForm({
  form : 'login-form'
})(LoginForm);