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
import Applications from '../components/pages/Applications';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import Settings from '../components/pages/Settings';
import Profile from '../components/pages/Profile';
import Account from '../components/pages/settings/Account';
import PasswordPage from '../components/pages/settings/PasswordPage';
import NotificationsForm from '../components/pages/settings/NotificationsForm';

export default (store) => {

  const MatchWhenAuthed = (nextState, replace) => {
    const { login: { authed } } = store.getState();
    if (!authed) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname },
      });
    }
  };

  return (
    <Route name="app" path="/" component={App} >
      <IndexRoute component={Applications} />
      <Route path="/applications" component={Applications} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/settings" component={Settings} onEnter={MatchWhenAuthed}>
        <IndexRedirect to="account" />
        <Route path="account" component={Account} />
        <Route path="password" component={PasswordPage} />
        <Route path="notifications" component={NotificationsForm} />
      </Route>
      <Route path="/profile" component={Profile} />
    </Route>
  );
  
};




