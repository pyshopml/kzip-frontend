import React, {createClass} from 'react'
import {Link} from 'react-router';
import LoginForm from './LoginForm.jsx';

const Login = createClass({

  handleSubmit (vals) {
    console.log(vals);
  },

  render () {
    return (
      <section className="auth-form">
        <h2>Вход</h2>
        <LoginForm onSubmit={this.handleSubmit} />
        <div>
          <Link to="">Восстановить Пароль</Link>
          <Link to="/signup">Создать аккаунт</Link>
        </div>
      </section>
    );
  }
});

export default Login;