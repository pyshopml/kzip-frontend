import React, { Component, PropTypes } from 'react';
import ControlsNavigation from './ControlsNavigation';
import UserMenu from '../UserMenu';

import css from './style.scss';

class UserPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
    };

    this.expandPanel = this.expandPanel.bind(this);
    this.logoutHandler = this.logoutHandler.bind(this);
  }

  expandPanel() {
    const { isExpanded } = this.state;
    this.setState({ isExpanded: !isExpanded });
  }

  logoutHandler(e) {
    e.preventDefault();
    this.props.logout();
  }

  className() {
    const { isExpanded } = this.state;
    if (isExpanded) 
      return css.expanded
    else 
      return css.user_info
  }

  render() {
    return (
      <aside className={ this.className() }>
        <UserMenu { ...this.props } expandPanel={ this.expandPanel } />
        <ControlsNavigation logoutHandler={ this.logoutHandler } />
      </aside>
    );
  }
}

UserPanel.propTypes = {
  user: PropTypes.shape().isRequired,
  logout: PropTypes.func.isRequired,
};

export default UserPanel;
