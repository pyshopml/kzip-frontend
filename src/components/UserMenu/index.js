import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import css from './style.scss';

const UserMenu = ({ user, expandPanel }) => (
  <div className={css.user_menu_controls}>
    <span className="glyphicon glyphicon-user" />
    <Link to="profile" className="link">{ user.displayName || user.email }</Link>
    <button 
      onClick={ expandPanel } 
      className={ `glyphicon glyphicon-menu-down ${css.expand_control}` } />
  </div>
);

UserMenu.propTypes = {
  user: PropTypes.shape().isRequired,
  expandPanel: PropTypes.func.isRequired
};

export default UserMenu;