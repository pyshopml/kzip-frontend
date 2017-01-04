import React from 'react';
import {Field, reduxForm} from 'redux-form';

const LoginForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Field 
          type="email" 
          component="input"
          className="form-control" 
          name="email" 
          placeholder="E-mail" />
      </div>
      <div className="form-group">
        <Field 
          type="password" 
          component="input"
          className="form-control" 
          name="password" 
          placeholder="Пароль" />
      </div>
      <button type="submit" className="btn btn-primary">Войти</button>
    </form>
  );
}; 

export default reduxForm({
  form : 'login-form'
})(LoginForm);