import React from 'react';
import {Link} from 'react-router';

const Authbar = () => {
  return (
    <div className="auth-bar">
      <Link className="link" to="/login">
        <span className="glyphicon glyphicon-lock" />
        Войти на сайт
      </Link>
    </div>
  );
};

export default Authbar;