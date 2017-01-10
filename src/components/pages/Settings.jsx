import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Settings extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentTab: 'account'
    };

    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(tab) {
    this.setState({
      currentTab: tab
    });
  }

  render() {
    const { currentTab } = this.state;

    return (
      <div>
        <ul className="nav nav-tabs">
          <li role="presentation" className="active">
            <Link to="/settings/account">Аккаунт</Link>
          </li>
          <li role="presentation" className={currentTab === 'password' ? 'active' : ''}>
            <Link to="/settings/password">Управление паролем</Link>
          </li>
          <li role="presentation" className={currentTab === 'notifications' ? 'active' : ''}>
            <Link to="/settings/notifications">Уведомления</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
};

export default Settings;
