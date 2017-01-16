/* ------------------------------------------------------------------------------
* routes.jsx
*
* main routing config file
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from '../components/App';
import Posts from '../components/pages/Posts';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import Settings from '../components/pages/Settings';
import NewPost from '../components/pages/NewPost';
import Profile from '../components/pages/Profile';
import Account from '../components/pages/settings/Account';
import PasswordPage from '../components/pages/settings/PasswordPage';
import NotificationsForm from '../components/pages/settings/NotificationsForm';
import { firebase } from '../utils/auth';

const isLoggedIn = (nextState, replace, callback) => {
  const user = firebase.auth().currentUser;
  if (user) { callback(); }
  else {
    replace('/login');
    callback();
  }
};

const routes = (
  <Route name="app" path="/" component={App} >
    <IndexRedirect to="/posts" />
    <Route path="/posts" component={Posts} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/newpost" component={NewPost} onEnter={ isLoggedIn } />
    <Route path="/profile" component={Profile} />
    <Route path="/settings" component={Settings} onEnter={ isLoggedIn }>
      <IndexRedirect to="/settings/account" />
      <Route path="account" component={Account} />
      <Route path="password" component={PasswordPage} />
      <Route path="notifications" component={NotificationsForm} />
    </Route>
  </Route>
);

module.exports = routes;
