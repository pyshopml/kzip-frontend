import React from 'react';
import NavLink from '../NavLink';

const Authbar = () => (
  <div className="user-info">
    <NavLink path="/login" name="Войти на сайт" icon="glyphicon glyphicon-lock" />
  </div>
);

export default Authbar;
