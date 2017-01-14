/* ------------------------------------------------------------------------------
* NewPostForm.jsx
*
* Form component for Login page
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Spinner } from 'elemental';
import { notEmpty } from '../../utils/form_validations';
import RenderField from '../common/RenderField';

const NewPostForm = ({ handleSubmit, inProgress }) => (
  <form onSubmit={ handleSubmit }> 
    <Field
      type="text"
      component={RenderField}
      name="title"
      label="Заголовок"
      validate={notEmpty}
    />
    <Field
      type="text"
      component={RenderField}
      name="description"
      label="Описание"
      validate={notEmpty}
    />
    <button type="submit" className="btn btn-primary">
      { inProgress ? <Spinner type="inverted" /> : 'Создать' }
    </button>
  </form>
);

NewPostForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  inProgress: PropTypes.bool,
};

export default reduxForm({
  form: 'new-post-form',
})(NewPostForm);
