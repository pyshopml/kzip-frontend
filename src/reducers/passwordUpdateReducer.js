/* ------------------------------------------------------------------------------
* passwordUpdateReducer.js
*
* reducer for password update state
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import * as types from '../constants/actionTypes';

const model = {
  inProgress: false,
  errorMsg: '',
  successMsg: '',
};

export default (state = model, action) => {
  switch (action.type) {
    case types.PASSWORD_UPDATE_STARTED:
      return Object.assign({}, state, { inProgress: true });

    case types.PASSWORD_UPDATE_FINISHED:
      return Object.assign(
              {},
              state,
              model,
              { successMsg: action.msg });

    case types.UPDATE_MESSAGE_HIDE:
      return Object.assign({}, state, { successMsg: '' });

    case types.LOCATION_CHANGE:
      return Object.assign({}, state, model);

    case types.FORM_CHANGE:
      return Object.assign({}, state, model);

    case types.PASSWORD_UPDATE_FAILED:
      return Object.assign({}, state, { inProgress: false, errorMsg: action.error });

    default:
      return state;
  }
};
