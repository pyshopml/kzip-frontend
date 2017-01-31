import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const UserMenu = ({ user, expandPanel }) => (
  <div className='user-menu-controls'>
    <span className="glyphicon glyphicon-user" />
    <Link to="profile" className="link">{ user.displayName || user.email }</Link>
    <button onClick={ expandPanel } className="glyphicon glyphicon-menu-down expand-control" />
  </div>
);

UserMenu.propTypes = {
  user: PropTypes.shape().isRequired,
  expandPanel: PropTypes.func.isRequired
};

export default UserMenu;