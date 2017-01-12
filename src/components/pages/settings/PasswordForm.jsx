import React, { Component, PropTypes } from 'react';
import firebase from '../../../utils/auth';

class PasswordForm extends Component {
  componentWillMount() {
    const user = firebase.auth().currentUser;
    console.log(user);
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <input  type="password" className="form-control"  placeholder="Пароль" />
          <span className="error-msg"></span>
        </div>
        <div className="form-group">
          <input  type="email"  className="form-control" id="password" placeholder="Пароль ещё раз" />
          <span className="error-msg"></span>
        </div>
        <button className="btn btn-primary">
          Обновить
        </button>
      </form>
    );
  }
}

export default PasswordForm;