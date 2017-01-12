/* ------------------------------------------------------------------------------
* routes.jsx
*
* main routing config file
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import Applications from '../components/pages/Applications';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import Settings from '../components/pages/Settings';

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
      <Route path="/settings" component={Settings} onEnter={MatchWhenAuthed} />
    </Route>
  );
};
