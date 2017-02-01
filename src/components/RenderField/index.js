/* ------------------------------------------------------------------------------
* RenderField.jsx
*
* Input field for authentication form
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import React, { PropTypes } from 'react';

import css from './style.scss';

const RenderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className={ error ? 'form-group has-error' : 'form-group' }>
    <div className={ css.input_field }>
      <input {...input} placeholder={label} type={type} className="form-control" />
      { touched && (error && <span className={ css.error_msg }>{ error }</span>) }
    </div>
  </div>
);

RenderField.propTypes = {
  input: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
};

export default RenderField;
