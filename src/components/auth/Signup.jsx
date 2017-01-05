import React, {createClass} from 'react'
import {Link} from 'react-router';
import SignupForm from './SignupForm.jsx';

const Signup = createClass({
  handleSubmit (vals) {
    console.log(vals);
  },

  render () {
    return (
      <section className="auth-form">
        <h2>Регистрация</h2>
        <SignupForm onSubmit={this.handleSubmit} />
        <div>
          <Link to="">Восстановить Пароль</Link>
          <Link to="/login">Войти используя аккаунт</Link>
        </div>
      </section>
    );  
  }
});

export default Signup;