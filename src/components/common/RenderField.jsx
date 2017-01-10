/* ------------------------------------------------------------------------------
* RenderField.jsx
*
* Input field for authentication form
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import React, { PropTypes } from 'react';

const RenderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className={error ? 'form-group has-error' : 'form-group'}>
    <div className="input-field">
      <input {...input} placeholder={label} type={type} className="form-control" />
      { touched && (error && <span className="error-msg">{error}</span>) }
    </div>
  </div>
);

RenderField.propTypes = {
  input: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
};

export default RenderField;
