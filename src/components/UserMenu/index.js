import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import css from './style.scss';

const UserMenu = ({ user, expandPanel, isExpanded }) => (
  <div className={ css.user_menu }>
    <span className="glyphicon glyphicon-user" />
    <Link to="profile" className={css.link}>
      { user.displayName || user.email }
    </Link>
    <button 
      onClick={ expandPanel } 
      className={ `glyphicon glyphicon-menu-down ${ isExpanded ? css.expanded_controls : css.controls }` } />
  </div>
);

UserMenu.propTypes = {
  user: PropTypes.shape().isRequired,
  expandPanel: PropTypes.func.isRequired
};

export default UserMenu;