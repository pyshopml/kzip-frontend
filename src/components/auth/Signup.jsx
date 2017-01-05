import React from 'react'
import {Link} from 'react-router';
import SignupForm from './SignupForm.jsx';

const Signup = () => {
  return (
    <section className="auth-form">
      <h2>Регистрация</h2>
      <SignupForm />
      <div>
        <Link to="">Восстановить Пароль</Link>
        <Link to="/login">Войти используя аккаунт</Link>
      </div>
    </section>
  );
};

export default Signup;