/* ------------------------------------------------------------------------------
* app.js
*
* Root React component for applicationt
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import React from 'react';
import {render} from 'react-dom';
import App from './components/App.jsx';

// router related 
import {Router, hashHistory} from 'react-router';
import routes from './config/routes.jsx';

const Main = ({store}) => {
  return (
    <Router history={hashHistory} routes={routes} />
  );
};

render(<Main />, document.getElementById('main'));
