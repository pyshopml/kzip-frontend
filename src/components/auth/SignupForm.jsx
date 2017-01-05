import React, {createClass} from 'react';
import {Field, reduxForm} from 'redux-form';

const SignupForm = createClass({
  render () {
    return (
      <form>
        <div className="form-group">
          <input type="text" className="form-control" id="name" placeholder="Имя" />
        </div>
        <div className="form-group">
          <input type="email" className="form-control" id="email" placeholder="E-mail" />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" id="password" placeholder="Пароль" />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" id="password" placeholder="Пароль еще раз" />
        </div>
        <button className="btn btn-primary">Зарегистрироваться</button>
      </form>
    );
  }
});

export default SignupForm;