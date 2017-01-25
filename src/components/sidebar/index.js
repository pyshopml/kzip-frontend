import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import Authbar from './Authbar';
import firebase from '../../utils/auth';
import UserPanel from './UserPanel';

const Logo = () => 
  <div className="logo">
    <h2>ЯГражданин</h2>
  </div>;

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
      <aside className="sidebar">
        <Logo />
        {user != null ? <UserPanel user={user} /> : <Authbar /> }
        <Navigation />
      </aside>
    );
  }
}

export default Sidebar;
