import React, { Component, PropTypes } from 'react';
import ControlsNavigation from './ControlsNavigation';
import UserMenu from '../UserMenu';

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

  render() {
    const { isExpanded } = this.state;

    return (
      <aside className={ isExpanded ? 'user-info.expanded' : 'user-info' }>
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
