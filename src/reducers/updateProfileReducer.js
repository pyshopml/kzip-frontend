import * as types from '../actions/actionTypes';

const model = {
  inProgress: false,
  errorMsg: '',
  successMsg: '',
}

export default (state=model, action) => {
  switch (action.type) {

    case types.UPDATE_PROFILE_STARTED:
      return Object.assign({}, state, { inProgress: true });

    case types.UPDATE_PROFILE_FINISHED: 
      return Object.assign(
              {}, 
              state, 
              { inProgress: false, errorMsg: '', successMsg: action.msg });

    case types.UPDATE_MESSAGE_HIDE:
      return Object.assign({}, state, { successMsg: '' });

    case types.UPDATE_PROFILE_FAILED: 
      return Object.assign({}, state, { inProgress: false, errorMsg: action.error });

    default:
      return state;
  }
}