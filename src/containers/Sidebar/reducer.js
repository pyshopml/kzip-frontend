import * as types from './constants';

const initialState = {
  inProgress: false,
  errorMsg: '',
  authed: false,
};

export default (state = initialState, action) => {
  const { message } = action.error || '';

  switch (action.type) {
    default:
      return state;
  }
};
