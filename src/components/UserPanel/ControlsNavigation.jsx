import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import NavLink from '../NavLink';

import css from './nav_style.scss';

const ControlsNavigation = ({ logoutHandler, hide }) => {
  return (
     <nav className={ hide ? css.hide : '' }>
      <ul>
        <li>
          <NavLink path="/settings" icon="glyphicon glyphicon-cog" name="Настройки" />
        </li>
        <li>
          <NavLink path="/logout" icon="glyphicon glyphicon-log-out" name="Выход" />
        </li>
      </ul>
    </nav>
  );
};

ControlsNavigation.propTypes = {
  logoutHandler: PropTypes.func.isRequired
};

export default ControlsNavigation;