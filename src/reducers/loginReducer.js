import * as types from '../actions/actionTypes';

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

    case '@@router/LOCATION_CHANGE':
      return Object.assign({}, state, { inProgress: false, errorMsg: '' });

    case '@@redux-form/CHANGE':
      return Object.assign({}, state, { errorMsg: '' });

    case types.LOGOUT_STARTED:
      return state;

    default:
      return state;
  }
};
