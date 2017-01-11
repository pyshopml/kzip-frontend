import * as types from '../actions/actionTypes';

const model = {
  inProgress: false,
  errorMsg: ''
}

export default (state=model, action) => {
  switch (action.type) {

    case types.UPDATE_PROFILE_STARTED:
      return Object.assign({}, state, { inProgress: true });

    case types.UPDATE_PROFILE_FINISHED: 
      return Object.assign({}, state, { inProgress: false, errorMsg: '' });

    case types.UPDATE_PROFILE_FAILED: 
      return Object.assign({}, state, { inProgress: false, errorMsg: action.error });

    default:
      return state;
  }
}