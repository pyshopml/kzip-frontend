import * as types from '../actions/actionTypes';

const model = {
  user: null,
};

export default (state = model, action) => {
  switch (action.type) {
    case types.AUTH_CHANGED:
      return Object.assign({}, state, { user: action.user });

    case types.LOGOUT_FINISHED:
      return Object.assign({}, state, { user: null });

    default:
      return state;
  }
};
