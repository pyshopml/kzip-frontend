/* ------------------------------------------------------------------------------
* routes.jsx
*
* main routing config file
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import React from 'react';
import App from '../components/App.jsx';
import {Route, IndexRoute} from 'react-router';
import Applications from '../components/pages/Applications.jsx';
import Login from '../components/auth/Login.jsx';
import Signup from '../components/auth/Signup.jsx';

const routes = (
  <Route name="app" path="/" component={App} >
    <IndexRoute component={Applications} />
    <Route path="/applications" component={Applications} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
  </Route>
)

module.exports = routes;