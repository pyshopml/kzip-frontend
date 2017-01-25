import React, { PropTypes } from 'react';
import { isEmpty } from 'ramda';

const AlertBox = ({ error }) => (
  <div className={ isEmpty(error) ? 'alert alert-danger hidden' : 'alert alert-danger' } role="alert">
    { error }
  </div>
);

AlertBox.propTypes = {
  error: PropTypes.string,
};

export default AlertBox;
