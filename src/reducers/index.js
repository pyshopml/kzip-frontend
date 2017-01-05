/* ------------------------------------------------------------------------------
* index.js
*
* root reducer
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
import singup from './signupReducer.js';

export default combineReducers({
  routing : routerReducer,
  form : formReducer,
  signup
});