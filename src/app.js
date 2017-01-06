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
import {syncHistoryWithStore} from 'react-router-redux';
import routes from './config/routes.jsx';

import configStore from './store/configureStore.js';
import {Provider} from 'react-redux';

const store = configStore();
const history = syncHistoryWithStore(hashHistory, store);

const Main = ({store}) => {
  return (
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  );
};

render(<Main store={store} />, document.getElementById('main'));

