/* ------------------------------------------------------------------------------
* AppReducer
*
* The reducer takes care of our data. 
* Using actions, we can change our application state.
* To add a new action, add it to the switch statement in the reducer function.
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import signup from './signupReducer';
import login from './loginReducer';
import updateProfile from './updateProfileReducer';
import password from './passwordUpdateReducer';

// already updated
import account from '../AccountSettings/reducer';

const appReducer = (state = {}, action) => {
  switch(action.type) {

    default:
      return state;
  }
};

export default (state = {}, action) => ({
  app: appReducer(state.app, action),
  account,
  home: HomeReducer(state.home, action)
});