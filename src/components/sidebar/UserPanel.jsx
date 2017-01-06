import React, {createClass, PropTypes} from 'react';
import {Link} from 'react-router';

const UserPanel = createClass({
  propTypes : {
    user : PropTypes.object
  },

  getInitialState() {
    return {
      isExpanded : true
    };
  },

  expandPanel () {
    let {isExpanded} = this.state;
    this.setState({ isExpanded : !isExpanded  });
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
              <Link className="link nav-link dark">
                <span className="glyphicon glyphicon-log-out" aria-hidden="true" />
                Выход
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );  
  }
  
});

export default UserPanel;