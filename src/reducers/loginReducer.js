/* ------------------------------------------------------------------------------
* loginReducer.js
*
* logic for handling login related state changes
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import * as types from '../constants/actionTypes';

const model = {
  inProgress: false,
  errorMsg: '',
};

export default (state = model, action) => {
  const { message } = action.error || '';

  switch (action.type) {
    case types.LOGIN_STARTED:
      return Object.assign({}, state, { inProgress: true });

    case types.LOGIN_FINISHED:
      return Object.assign({}, state, { inProgress: false, errorMsg: '' });

    case types.LOGIN_FAILED:
      return Object.assign({}, state, { inProgress: false, errorMsg: message });

    case types.LOCATION_CHANGE:
      return Object.assign({}, state, { inProgress: false, errorMsg: '' });

    case types.FORM_CHANGE:
      return Object.assign({}, state, { errorMsg: '' });

    case types.LOGOUT_STARTED:
      return state;

    default:
      return state;
  }
};
