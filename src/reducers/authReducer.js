export default (state={}, action) => {
  switch(action.type) {
    case 'SIGNUP_STARTED':
      return state;

    case 'SIGNUP_FAILED':
      const errCode = action.err.code;
      const errMsg = action.err.message;
      console.log(`${errCode}: ${errMsg}`);
      return state;

    default: 
      return state;
  }
};