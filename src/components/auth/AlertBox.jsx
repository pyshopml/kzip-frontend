import React from 'react';

const AlertBox = ({error}) => {
  return (
    <div className="alert alert-danger" role="alert">
      {error}
    </div>
  );
};

export default AlertBox;