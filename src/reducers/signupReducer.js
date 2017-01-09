import * as types from '../actions/actionTypes';

const model = {
  inProgress: false,
  errorMsg: '',
};

export default (state = model, action) => {
  const { message } = action.error || '';

  switch (action.type) {
    case types.SIGNUP_STARTED:
      return Object.assign({}, state, { inProgress: true });

    case types.SIGNUP_FINISHED:
      return Object.assign({}, state, { inProgress: false, errorMsg: '' });

    case '@@router/LOCATION_CHANGE':
      return Object.assign({}, state, { inProgress: false, errorMsg: '' });

    case '@@redux-form/CHANGE':
      return Object.assign({}, state, { errorMsg: '' });

    case types.SIGNUP_FAILED:
      return Object.assign({}, state, { inProgress: false, errorMsg: message });

    default:
      return state;
  }
};
