import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebase } from '../../utils/auth.js';

class Navigation extends Component {
  createPostButton() {
    return(
      <button type="button" className="btn btn-success">
        <Link to="/newpost">Создать заявку</Link>
      </button>
    )
  }

  createPost() {
    const user = firebase.auth().currentUser;
    if (user) return this.createPostButton();
  }

  render() {
    return (
      <nav className="navigation">
        <ul>
          <li>
            <Link className="link nav-link" to="/posts">
              <span className="glyphicon glyphicon-book" />
              Заявки
            </Link>
          </li>
        </ul>
        { this.createPost() }
      </nav>
    );
  }
  
};

export default Navigation;
