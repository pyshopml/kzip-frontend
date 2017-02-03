/* ------------------------------------------------------------------------------
* AccountForm.jsx
*
* form for account part of settings page
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import React, { PropTypes, Component } from 'react';
import { Spinner } from 'elemental';
import { firebase } from '../../utils/auth';
import { isEmpty } from 'ramda';

import css from './form_style.scss';

class AccountForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      displayName: '',
      email: '',
      nameError: '',
      emailError: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateDisplayName = this.updateDisplayName.bind(this);
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

  nameValidation(val) {
    let res = null; 

    if (isEmpty(val)) 
      res = { nameError: 'Не может быть пустым', displayName: val };
    else 
      res = { nameError: '', displayName: val };

    this.setState(res);
  }

  emailValidation(val) {
    let res = null;

    if (isEmpty(val)) 
      res = { emailError: 'Не может быть пустым', email: val };
    else 
      res = { emailError: '', email: val };

    this.setState(res);
  }

  updateDisplayName (str) {
    this.nameValidation(str);
  }

  updateEmail (str)  {
    this.emailValidation(str);
  }

  handleSubmit() {
    const { email, displayName } = this.state;
    this.props.onSubmit({ email, displayName });
  }

  render() {
    const { displayName, email, nameError, emailError } = this.state;
    const { inProgress } = this.props;

    return (
      <form className={ css.form }>
        <div className={`form-group ${css.input_field}`}>
          <input 
            onChange={ e => this.updateDisplayName(e.target.value) } 
            type="text"
            className="form-control"
            value={displayName} 
            placeholder="Имя пользователя" />
          <span className={ css.error_msg }>{ nameError }</span>
        </div>
        <div className={`form-group ${css.input_field}`}>
          <input
            onChange={ e => this.updateEmail(e.target.value) } 
            type="email" 
            value={email} 
            className="form-control"
            id="password" 
            placeholder="Пароль" />
          <span className={ css.error_msg }>{ emailError }</span>
        </div>
        <button  
          disabled={ !isEmpty(nameError) || !isEmpty(emailError) } 
          className="btn btn-primary"
          onClick={this.handleSubmit} 
          >
          { inProgress ? <Spinner type="inverted" /> : 'Сохранить' }
        </button>
      </form>
    );
  }
}

AccountForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default AccountForm;