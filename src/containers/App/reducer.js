/* ------------------------------------------------------------------------------
* AppReducer
*
* The reducer takes care of our data. 
* Using actions, we can change our application state.
* To add a new action, add it to the switch statement in the reducer function.
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import accountReducer from '../AccountSettings/reducer';
import loginReducer from  '../Login/reducer';
import passwordReducer from '../PasswordSettings/reducer';

const appReducer = (state = {}, action) => {
  switch(action.type) {

    default:
      return state;
  }
};

export default (state = {}, action) => ({
  app: appReducer(state.app, action),
  account: accountReducer(state.account, action),
  login: loginReducer(state.login, action),
  password: passwordReducer(state.password, action),
});