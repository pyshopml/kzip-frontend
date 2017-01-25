import React, { Component } from 'react';
import firebase from '../../utils/auth';
import Navigation from './Navigation';
import Authbar from './Authbar';
import UserPanel from './UserPanel';
import Logo from './Logo';

class Sidebar extends Component {

  componentWillMount() {
    this.unset = firebase.auth().onAuthStateChanged(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unset();
  }

  render() {
    const user = firebase.auth().currentUser;

    return (
      <aside className="layout-sidebar">
        <Logo />
        {user != null ? <UserPanel user={user} /> : <Authbar /> }
        <Navigation />
      </aside>
    );
  }
}

export default Sidebar;
