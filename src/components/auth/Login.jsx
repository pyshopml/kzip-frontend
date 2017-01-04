import React from 'react'
import {Link} from 'react-router';

const Login = () => {
  return (
    <section className="auth-form">
      <h2>Вход</h2>
      <form>
        <div className="form-group">
          <input type="email" className="form-control" id="email" placeholder="E-mail" />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" id="password" placeholder="Пароль" />
        </div>
        <button className="btn btn-primary">Войти</button>
      </form>
      <div>
        <Link to="">Восстановить Пароль</Link>
        <Link to="/signup">Создать аккаунт</Link>
      </div>
    </section>
  );
};

export default Login;