import React from 'react'
import {Link} from 'react-router';

const Signup = () => {
  return (
    <section className="auth-form">
      <h2>Регистрация</h2>
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
      <div>
        <Link to="">Восстановить Пароль</Link>
        <Link to="/login">Войти используя аккаунт</Link>
      </div>
    </section>
  );
};

export default Signup;