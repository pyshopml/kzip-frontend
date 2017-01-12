import React, { Component, PropTypes } from 'react';
import firebase from '../../../utils/auth';

class PasswordForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      password: '',
      password_confirmation: '',
    };

    this.updatePassword = this.updatePassword.bind(this);
    this.updatePasswordConfirmation = this.updatePasswordConfirmation.bind(this);
  }

  updatePassword(str) {
    this.setState({ password: str  });
  }

  updatePasswordConfirmation() {
    this.setState({ password_confirmation: str  });
  }

  render() {
    const { password, password_confirmation } = this.state;

    return (
      <form>
        <div className="form-group">
          <input type="password" onChange={this.updatePassword} className="form-control"  placeholder="Пароль" value={password} />
          <span className="error-msg"></span>
        </div>
        <div className="form-group">
          <input 
            type="password" 
            onChange={this.updatePasswordConfirmation} 
            className="form-control" 
            placeholder="Пароль ещё раз" 
            value={password_confirmation} />
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