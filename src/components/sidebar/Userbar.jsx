import React from 'react';

const Userbar = ({user}) => {
  return (
    <div className="auth-bar">
      <div className="user-box">
        <span className="glyphicon glyphicon-user" />
        {user.email}
      </div>
    </div>
  );
};

export default Userbar;