import React, { PropTypes } from 'react';
import { isEmpty } from 'ramda';

import css from './style.scss';

const msgClass = (msg) => 
    isEmpty(msg) ? `${css.alert} alert-success ${css.hidden}` :  `${css.alert} alert-success`

const SuccessBox = ({ msg }) => (
  <div className={ msgClass(msg) } role="alert">
    { msg }
  </div>
);

SuccessBox.propTypes = {
  msg: PropTypes.string,
};

export default SuccessBox;
