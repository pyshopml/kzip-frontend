import * as types from '../constants/actionTypes';

const initialState = {
  inProgress: false,
  errorMsg: '',
  authed: false,
};

export default (state = initialState, action) => {
  const { message } = action.error || '';

  switch (action.type) {
    case types.LOGIN_STARTED:
      return Object.assign({}, state, { inProgress: true });

    case types.LOGIN_FINISHED:
      return Object.assign({}, state, { inProgress: false, errorMsg: '', authed: true });

    case types.LOGIN_FAILED:
      return Object.assign({}, state, { inProgress: false, errorMsg: message, authed: false });

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
