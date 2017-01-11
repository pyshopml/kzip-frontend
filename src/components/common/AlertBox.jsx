import React, { PropTypes } from 'react';

const AlertBox = ({ error }) => (
  <div className="alert alert-danger" role="alert">
    {error}
  </div>
);

AlertBox.propTypes = {
  error: PropTypes.string,
};

export default AlertBox;
