import React, {createClass, PropTypes} from 'react'
import {Link} from 'react-router';
import {connect} from 'react-redux';
import SignupForm from './SignupForm.jsx';
import {signUp} from '../../actions/signupActions.js';
import {isEmpty, unless} from 'ramda';

const AlertBox = ({error}) => {
  return (
    <div className="alert alert-danger alert-dismissible" role="alert">
      <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      {error}
    </div>
  );
};

const Signup = createClass({
  propTypes : {
    signUp : PropTypes.func.isRequired,
    errorMsg : PropTypes.string.isRequired,
    inProgress : PropTypes.bool.isRequired
  },

  handleSubmit (vals) {
    this.props.signUp(vals);
  },

  render () {
    let {errorMsg, inProgress} = this.props;
    
    return (
      <section className="auth-form">
        { isEmpty(errorMsg) ? "" : <AlertBox error={errorMsg} /> }
        <h2>Регистрация</h2>
        <SignupForm onSubmit={this.handleSubmit} inProgress={inProgress} />
        <div>
          <Link to="">Восстановить Пароль</Link>
          <Link to="/login">Войти используя аккаунт</Link>
        </div>
      </section>
    );  
  }
});

const mapStateToProps = ({ signup }, ownProps) => {
  return {
    errorMsg : signup.errorMsg,
    inProgress : signup.inProgress
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp : (obj) => dispatch( signUp(obj) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);