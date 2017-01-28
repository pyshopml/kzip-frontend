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
import { firebase } from '../../utils/auth';
import { isEmpty } from 'ramda';

class AccountForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      displayName: '',
      email: '',
      nameError: '',
      emailError: ''
    }

    this.updateDisplayName = this.updateDisplayName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    if (isEmpty(val)) this.setState({ nameError: 'Не может быть пустым' });
    else this.setState({ nameError: '' });
  }

  emailValidation(val) {
    if (isEmpty(val)) this.setState({ emailError: 'Не может быть пустым' });
    else this.setState({ emailError: '' });
  }

  updateDisplayName (str) {
    this.nameValidation(str);
    this.setState({ displayName: str });
  }

  updateEmail (str)  {
    this.emailValidation(str);
    this.setState({ email: str }); 
  }

  handleSubmit() {
    const { email, displayName } = this.state;
    this.props.onSubmit({ email, displayName });
  }

  render() {
    const { displayName, email, nameError, emailError } = this.state;
    const { inProgress } = this.props;

    return (
      <form>
        <div className="form-group">
          <input onChange={ e => this.updateDisplayName(e.target.value) } type="text" className="form-control" value={displayName} placeholder="Имя пользователя" />
          <span className="error-msg">{ nameError }</span>
        </div>
        <div className="form-group">
          <input onChange={ e => this.updateEmail(e.target.value) } type="email" value={email} className="form-control" id="password" placeholder="Пароль" />
          <span className="error-msg">{ emailError }</span>
        </div>
        <button disabled={ !isEmpty(nameError) || !isEmpty(emailError) } onClick={this.handleSubmit} className="btn btn-primary">
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