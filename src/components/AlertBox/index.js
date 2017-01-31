import React, { PropTypes } from 'react';
import { isEmpty } from 'ramda';

import css from './style.css';

const AlertBox = ({ error }) => (
  <div 
    className={ isEmpty(error) ? `${css.alert} alert-danger ${css.hidden}` : `${css.alert} alert-danger` }

    role="alert">
    { error }
  </div>
);

AlertBox.propTypes = {
  error: PropTypes.string,
};

export default AlertBox;
