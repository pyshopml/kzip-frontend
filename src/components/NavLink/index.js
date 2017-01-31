import React from 'react';
import { Link } from 'react-router';

import css from './style.css';

const NavLink = ({ path, name, icon }) => (
  <Link className={css.navLink} to={path}>
    <span className={icon} />
    { name }
  </Link>
);

export default NavLink;