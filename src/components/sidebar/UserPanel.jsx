import React, {createClass, PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {logout} from '../../actions/loginActions.js';

const UserPanel = createClass({
  propTypes : {
    user : PropTypes.object,
    logout : PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      isExpanded : false
    };
  },

  expandPanel () {
    let {isExpanded} = this.state;
    this.setState({ isExpanded : !isExpanded  });
  },

  logoutHandler (e) {
    e.preventDefault();
    this.props.logout();
  },

  render () {
    let {user} = this.props;
    let {isExpanded} = this.state;

    return (
      <div className={isExpanded ? "auth-bar expanded" : "auth-bar"}>
        <div className="user-panel">
          <span className="glyphicon glyphicon-user" />
          {user.email}
          <span onClick={this.expandPanel} className="glyphicon glyphicon-menu-down control" />
        </div>
        <nav>
          <ul>
            <li>
              <Link className="link nav-link dark">
                <span className="glyphicon glyphicon-cog" aria-hidden="true" />
                Настройки
              </Link>
            </li> 
            <li>
              <a href="#" onClick={this.logoutHandler} className="link nav-link dark">
                <span className="glyphicon glyphicon-log-out" aria-hidden="true" />
                Выход
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );  
  }
  
});

const mapDispatchToProps = (dispatch) => {
  return {
    logout : () => dispatch( logout () )
  }
}

export default connect(null, mapDispatchToProps)(UserPanel);