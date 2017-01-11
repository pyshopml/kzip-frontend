/* ------------------------------------------------------------------------------
* index.js
*
* root reducer
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import signup from './signupReducer';
import login from './loginReducer';
import updateProfile from './updateProfileReducer';

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  signup,
  login,
  updateProfile,
});
