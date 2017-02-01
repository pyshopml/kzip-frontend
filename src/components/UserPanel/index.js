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
    const { isExpanded } = this.state;

    return (
      <aside className={ isExpanded ? css.user_panel_expanded : css.user_panel }>
        <UserMenu 
          { ...this.props } 
          expandPanel={ this.expandPanel } 
          isExpanded={ this.state.isExpanded } />
          
        <ControlsNavigation 
          hide={ !this.state.isExpanded } 
          logoutHandler={ this.logoutHandler } 
        />
      </aside>
    );
  }
}

UserPanel.propTypes = {
  user: PropTypes.shape().isRequired,
  logout: PropTypes.func.isRequired,
};

export default UserPanel;
