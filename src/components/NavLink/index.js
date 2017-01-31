import React from 'react';
import { Link } from 'react-router';

import css from './style.scss';

const NavLink = ({ path, name, icon }) => (
  <Link className={css.nav_link} to={path}>
    <span className={icon} />
    { name }
  </Link>
);

export default NavLink;