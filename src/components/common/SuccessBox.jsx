import React, { PropTypes } from 'react';
import { isEmpty } from 'ramda';

const SuccessBox = ({ msg }) => (
  <div className={ isEmpty(msg) ? 'alert alert-success hidden' :  'alert alert-success' } role="alert">
    { msg }
  </div>
);

SuccessBox.propTypes = {
  msg: PropTypes.string,
};

export default SuccessBox;
