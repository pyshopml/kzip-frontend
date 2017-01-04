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
import Home from '../components/pages/Home.jsx';
import Complains from '../components/pages/Complains.jsx';
import Suggestions from '../components/pages/Suggestions.jsx';
import Login from '../components/auth/Login.jsx';
import Signup from '../components/auth/Signup.jsx';

const routes = (
  <Route name="app" path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/complains" component={Complains} />
    <Route path="/suggestions" component={Suggestions} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
  </Route>
)

module.exports = routes;