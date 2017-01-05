import React, {createClass, PropTypes} from 'react'
import {Link} from 'react-router';
import {connect} from 'react-redux';
import SignupForm from './SignupForm.jsx';
import {signUp} from '../../actions/authActions.js';

const Signup = createClass({
  propTypes : {
    signUp : PropTypes.func
  },

  handleSubmit (vals) {
    let {signUp} = this.props;
    signUp(vals);
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

const mapDispatchToProps = (dispatch) => {
  return {
    signUp : (obj) => dispatch( signUp(obj) )
  }
}

export default connect(null, mapDispatchToProps)(Signup);