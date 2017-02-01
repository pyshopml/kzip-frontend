import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const SettingsNavigation = ({ currentTab }) => (
  <nav>
    <ul className="nav nav-tabs">
      <li role="presentation" className={ currentTab === 'account' ? 'active' : '' }>
        <Link to="/settings/account">
          Аккаунт
        </Link>
      </li>
      <li role="presentation" className={ currentTab === 'password' ? 'active' : '' }>
        <Link to="/settings/password">
          Управление паролем
        </Link>
      </li>
      <li role="presentation" className={ currentTab === 'notifications' ? 'active' : '' }>
        <Link to="/settings/notifications">
          Уведомления
        </Link>
      </li>
    </ul>
  </nav>
);

SettingsNavigation.propTypes = {
  currentTab: PropTypes.string.isRequired
};

export default SettingsNavigation;