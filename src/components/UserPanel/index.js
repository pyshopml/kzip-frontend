import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

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
    const { user } = this.props;
    const { isExpanded } = this.state;

    return (
      <div className={ isExpanded ? 'user-info.expanded' : 'user-info' }>
        <div className='user-panel'>
          <span className="glyphicon glyphicon-user" />
          <Link to="profile" className="link">{ user.displayName || user.email }</Link>
          <button onClick={this.expandPanel} className="glyphicon glyphicon-menu-down control" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/settings" className="link nav-link dark">
                <span className="glyphicon glyphicon-cog" aria-hidden="true" />
                Настройки
              </Link>
            </li>
            <li>
              <a href="#logout" onClick={this.logoutHandler} className="link nav-link dark">
                <span className="glyphicon glyphicon-log-out" aria-hidden="true" />
                Выход
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

UserPanel.propTypes = {
  user: PropTypes.shape().isRequired,
  logout: PropTypes.func.isRequired,
};

export default UserPanel;
