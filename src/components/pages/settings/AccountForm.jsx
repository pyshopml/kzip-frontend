/* ------------------------------------------------------------------------------
* AccountForm.jsx
*
* form for account part of settings page
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Spinner } from 'elemental';
import { notEmpty } from '../../../utils/form_validations';
import RenderField from '../../common/RenderField';
import { connect } from 'react-redux';

let AccountForm = ({ handleSubmit, inProgress }) => (
  <form onSubmit={ handleSubmit }>
    <Field
      type="text"
      component={RenderField}
      name="username"
      placeholder="Имя пользователя"
      validate={notEmpty}
    />

    <Field
      type="email"
      component={RenderField}
      name="email"
      placeholder="Пароль"
      validate={notEmpty}
    />

    <button type="submit" className="btn btn-primary">Сохранить</button>
  </form>
);

AccountForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  inProgress: PropTypes.bool,
  user: PropTypes.shape(),
};

AccountForm = reduxForm({
  form: 'account-form'
})(AccountForm);

const mapStateToProps = ({ auth }) => ({
  initialValues: auth.user
})

export default connect(mapStateToProps)(AccountForm);