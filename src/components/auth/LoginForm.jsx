import React, {createClass} from 'react';
import {Field, reduxForm} from 'redux-form';
import {isEmpty, isNil} from 'ramda';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="input-field">
    <input {...input} placeholder={label} type={type} className="form-control" />
    { touched && (error && <span className="error-msg">{error}</span>) }
  </div>
);

const LoginForm = createClass({
  getInitialState() {
    return {
      emailValid : true,
      passwordValid : true
    };
  },

  _requiredEmail (val) {
    if (isNil(val)) {
      this.setState({ emailValid : false });
      return 'Необходимо';
    } 

    this.setState({ emailValid : true });
    return undefined;
  },

  _requiredPassword (val) {
    if (isNil(val)) {
      this.setState({ passwordValid : false });
      return 'Необходимо';
    }     

    this.setState({ passwordValid : true });
    return undefined;
  },

  _isValidEmail (val) {
    if (val && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)) {
      this.setState({ emailValid : false });
      return 'Не корректный E-mail';
    } 

    this.setState({
      emailValid : true
    })
    return undefined;
  },

  render () {
    let {handleSubmit} = this.props;
    let {_requiredEmail, _requiredPassword, _isValidEmail} = this;
    let {emailValid, passwordValid} = this.state;

    return (
      <form onSubmit={handleSubmit}>
        <div className={emailValid ? "form-group" : "form-group has-error"}>
          <Field 
            type="email" 
            component={renderField}
            name="email" 
            placeholder="E-mail"
            validate={[ _requiredEmail, _isValidEmail ]} />
        </div>
        <div className={passwordValid ? "form-group" : "form-group has-error"}>
          <Field 
            type="password" 
            component={renderField}
            name="password" 
            placeholder="Пароль"
            validate={_requiredPassword} />
        </div>
        <button type="submit" className="btn btn-primary">Войти</button>
      </form>  
    );
  }
}); 

export default reduxForm({
  form : 'login-form'
})(LoginForm);