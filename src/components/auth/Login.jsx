import React, {createClass, PropTypes} from 'react'
import {Link} from 'react-router';
import LoginForm from './LoginForm.jsx';
import {connect} from 'react-redux';
import {login} from '../../actions/loginActions.js';
import {isEmpty} from 'ramda';
import AlertBox from './AlertBox.jsx';

const Login = createClass({
  propTypes : {
    login : PropTypes.func.isRequired,
    errorMsg : PropTypes.string.isRequired,
    inProgress : PropTypes.bool.isRequired
  },

  handleSubmit (vals) {
    this.props.login(vals)
  },

  render () {
    let {errorMsg, inProgress} = this.props;

    return (
      <section className="auth-form">
        { isEmpty(errorMsg) ? "" : <AlertBox error={errorMsg} /> }
        <h2>Вход</h2>
        <LoginForm onSubmit={this.handleSubmit} inProgress={inProgress} />
        <div>
          <Link to="">Восстановить Пароль</Link>
          <Link to="/signup">Создать аккаунт</Link>
        </div>
      </section>
    );
  }
});

const mapStateToProps = ({login}, ownProps) => {
  return {
    errorMsg : login.errorMsg,
    inProgress : login.inProgress
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login : (obj) => dispatch( login(obj) )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);