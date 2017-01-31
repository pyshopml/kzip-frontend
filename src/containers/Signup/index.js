import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { isEmpty } from 'ramda';
import SignupForm from './SignupForm';
import signUp from './actions';
import AlertBox from '../../components/AlertBox';

import css from './style.scss';

class Signup extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(vals) {
    this.props.signUp(vals);
  }

  render() {
    const { errorMsg, inProgress } = this.props;

    return (
      <section className={ css.auth_form }>
        <AlertBox error={errorMsg} />
        <h2>Регистрация</h2>
        <SignupForm onSubmit={this.handleSubmit} inProgress={inProgress} />
        <div>
          <Link className={css.link} to="">
            Восстановить Пароль
          </Link>
          <Link className={css.link} to="/login">
            Войти используя аккаунт
          </Link>
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

const mapStateToProps = ({ global: { signup } }) => ({
  errorMsg: signup.errorMsg,
  inProgress: signup.inProgress,
});

const mapDispatchToProps = dispatch => ({
  signUp: obj => dispatch(signUp(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
