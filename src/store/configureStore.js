/* ------------------------------------------------------------------------------
* configureStore.js
*
* store's configuration file
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */

import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export default function (initialState) {
  return createStore(
    rootReducer, 
    initialState,
    applyMiddleware( reduxImmutableStateInvariant(), thunk, logger() )
  );
};