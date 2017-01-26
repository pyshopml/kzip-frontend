import React from 'react';
import { Link } from 'react-router';

const Authbar = () => (
  <div className="user-info">
    <Link className="nav-link" to="/login">
      <span className="glyphicon glyphicon-lock" />
      Войти на сайт
    </Link>
  </div>
);

export default Authbar;
