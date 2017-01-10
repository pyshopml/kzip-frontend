import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../actions/loginActions';

class UserPanel extends Component {
  constructor() {
    super();

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
      <div className={isExpanded ? 'auth-bar expanded' : 'auth-bar'}>
        <div className="user-panel">
          <span className="glyphicon glyphicon-user" />
          <Link to="profile" className="link">{user.email}</Link>
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
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired,
    displayName: PropTypes.string,
  }),
  logout: PropTypes.func.isRequired,
};


const mapDispatchToProps = dispatch => (
  { logout: () => dispatch(logout()) }
);


export default connect(null, mapDispatchToProps)(UserPanel);
