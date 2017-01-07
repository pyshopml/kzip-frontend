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

const routes = (
  <Route name="app" path="/" component={App} >
    <IndexRoute component={Applications} />
    <Route path="/applications" component={Applications} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/settings" component={Settings} />
  </Route>
);

module.exports = routes;
