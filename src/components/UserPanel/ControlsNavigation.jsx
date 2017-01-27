import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const ControlsNavigation = ({ logoutHandler }) => {
  return (
     <nav>
      <ul>
        <li>
          <Link to="/settings" className="link nav-link dark">
            <span className="glyphicon glyphicon-cog" aria-hidden="true" />
            Настройки
          </Link>
        </li>
        <li>
          <a href="#logout" onClick={logoutHandler} className="link nav-link dark">
            <span className="glyphicon glyphicon-log-out" aria-hidden="true" />
            Выход
          </a>
        </li>
      </ul>
    </nav>
  );
};

ControlsNavigation.propTypes = {
  logoutHandler: PropTypes.func.isRequired
};

export default ControlsNavigation;