import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { isEmpty } from 'ramda';
import SignupForm from './SignupForm';
import signUp from '../../actions/signupActions';
import AlertBox from './AlertBox';

class Signup extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(vals) {
    this.props.signUp(vals);
  }

  render() {
    const { errorMsg, inProgress } = this.props;

    return (
      <section className="auth-form">
        { isEmpty(errorMsg) ? '' : <AlertBox error={errorMsg} /> }
        <h2>Регистрация</h2>
        <SignupForm onSubmit={this.handleSubmit} inProgress={inProgress} />
        <div>
          <Link to="">Восстановить Пароль</Link>
          <Link to="/login">Войти используя аккаунт</Link>
        </div>
      </section>
    );
  }
}

Signup.propTypes = {
  signUp: PropTypes.func.isRequired,
  errorMsg: PropTypes.string.isRequired,
  inProgress: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ signup }) => ({
  errorMsg: signup.errorMsg,
  inProgress: signup.inProgress,
});

const mapDispatchToProps = dispatch => ({
  signUp: obj => dispatch(signUp(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
