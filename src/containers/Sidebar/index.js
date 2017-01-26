import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '../../utils/auth';
import Navigation from '../../components/Navigation';
import AuthBar from '../../components/AuthBar';
import UserPanel from '../../components/UserPanel';
import Logo from '../../components/Logo';
import { logout } from './actions';

class Sidebar extends Component {
  componentWillMount() {
    this.unset = firebase.auth().onAuthStateChanged(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unset();
  }

  currentView() {
    const user = firebase.auth().currentUser;

    if (user !== null)
      return <UserPanel user={user} logout={this.props.logout} />
    else 
      return <AuthBar />
  }

  render() {
    return (
      <aside className="layout-sidebar">
        <Logo />
        { this.currentView() }
        <Navigation />
      </aside>
    );
  }
}

const mapDispatchToProps = dispatch => ({ 
  logout: () => dispatch(logout()) 
});

export default connect(null, mapDispatchToProps)(Sidebar);
