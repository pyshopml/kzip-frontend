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
import autobind from 'autobind-decorator'

import css from './form_style.scss';

@autobind
class AccountForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      displayName: '',
      email: '',
      nameError: '',
      emailError: ''
    }
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
        <div>
          <input 
            onChange={ e => this.updateDisplayName(e.target.value) } 
            type="text" 
            value={displayName} 
            placeholder="Имя пользователя" />
          <span className={ css.error_msg }>{ nameError }</span>
        </div>
        <div>
          <input
            onChange={ e => this.updateEmail(e.target.value) } 
            type="email" 
            value={email} 
            id="password" 
            placeholder="Пароль" />
          <span className={ css.error_msg }>{ emailError }</span>
        </div>
        <button  
          disabled={ !isEmpty(nameError) || !isEmpty(emailError) } 
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