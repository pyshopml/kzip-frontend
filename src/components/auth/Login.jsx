import React, {createClass, PropTypes} from 'react'
import {Link} from 'react-router';
import LoginForm from './LoginForm.jsx';
import {connect} from 'react-redux';
import {login} from '../../actions/loginActions.js';

const Login = createClass({
  propTypes : {
    login : PropTypes.func.isRequired
  },

  handleSubmit (vals) {
    this.props.login(vals)
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

const mapDispatchToProps = (dispatch) => {
  return {
    login : (obj) => dispatch( login(obj) )
  }
};

export default connect(null, mapDispatchToProps)(Login);