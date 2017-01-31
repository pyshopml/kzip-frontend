import React, { PropTypes } from 'react';
import { isEmpty } from 'ramda';

import css from './style.scss';

const msgClass = () => 
    isEmpty(msg) ? `${css.alert} alert-success ${css.hidden}` :  `${alert} alert-success`

const SuccessBox = ({ msg }) => (
  <div className={ msgClass() } role="alert">
    { msg }
  </div>
);

SuccessBox.propTypes = {
  msg: PropTypes.string,
};

export default SuccessBox;
