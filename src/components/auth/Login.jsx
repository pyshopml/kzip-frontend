import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { isEmpty } from 'ramda';
import LoginForm from './LoginForm';
import { login } from '../../actions/loginActions';
import AlertBox from '../common/AlertBox';

class Login extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(vals) {
    this.props.login(vals);
  }

  render() {
    const { errorMsg, inProgress } = this.props;

    return (
      <section className="auth-form">
        { isEmpty(errorMsg) ? '' : <AlertBox error={errorMsg} /> }
        <h2>Вход</h2>
        <LoginForm onSubmit={this.handleSubmit} inProgress={inProgress} />
        <div>
          <Link to="">Восстановить Пароль</Link>
          <Link to="/signup">Создать аккаунт</Link>
        </div>
      </section>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  errorMsg: PropTypes.string,
  inProgress: PropTypes.bool,
};

const mapStateToProps = state => ({
  errorMsg: state.login.errorMsg,
  inProgress: state.login.inProgress,
});

const mapDispatchToProps = dispatch => ({
  login: obj => dispatch(login(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
