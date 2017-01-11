/* ------------------------------------------------------------------------------
* AccountForm.jsx
*
* form for account part of settings page
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import React, { PropTypes, Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Spinner } from 'elemental';
import firebase from '../../../utils/auth';

class AccountForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      displayName: '',
      email: ''
    }

    this.updateDisplayName = this.updateDisplayName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
  }

  componentDidMount() {
    const user = firebase.auth().currentUser;
    if (user) {
      this.setState({
        displayName: user.displayName,
        email: user.email,
      })  
    }
  }

  updateDisplayName (str) {
    this.setState({ displayName: str });
  }

  updateEmail (str)  {
    this.setState({ email: str }); 
  }

  render() {
    const { displayName, email } = this.state;

    return (
      <form>
      <div className="form-group">
        <input onChange={ e => this.updateDisplayName(e.target.value) } type="text" className="form-control" value={displayName} placeholder="Имя пользователя" />
      </div>
      <div className="form-group">
        <input onChange={ e => this.updateEmail(e.target.value) } type="email" value={email} className="form-control" id="password" placeholder="Пароль" />
      </div>
      <button type="submit" className="btn btn-primary">Сохранить</button>
    </form>
    );
  }
}

export default AccountForm;