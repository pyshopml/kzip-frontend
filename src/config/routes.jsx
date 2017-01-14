/* ------------------------------------------------------------------------------
* routes.jsx
*
* main routing config file
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
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

const routes = (
  <Route name="app" path="/" component={App} >
    <IndexRoute component={Posts} />
    <Route path="posts" component={Posts} />
    <Route path="login" component={Login} />
    <Route path="signup" component={Signup} />
    <Route path="newpost" component={NewPost} />
    <Route path="settings" component={Settings}>
      <IndexRedirect to="account" />
      <Route path="account" component={Account} />
      <Route path="password" component={PasswordPage} />
      <Route path="notifications" component={NotificationsForm} />
    </Route>
    <Route path="/profile" component={Profile} />
  </Route>
);

module.exports = routes;
