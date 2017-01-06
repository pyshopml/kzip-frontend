const model = {
  inProgress : false,
  errorMsg : "hello world"
};

export default (state=model, action) => {
  switch(action.type) {
    case 'SIGNUP_STARTED':
      return Object.assign({}, state, { inProgress : true });

    case 'SIGNUP_FINISHED':
      return Object.assign({}, state, { inProgress : false, errorMsg : "" });

    case "@@router/LOCATION_CHANGE":
      return Object.assign({}, state, { inProgress : false, errorMsg : "" });

    case "@@redux-form/CHANGE": 
      return Object.assign({}, state, { errorMsg : "" });

    case 'SIGNUP_FAILED':
      const errCode = action.err.code;
      const errMsg = action.err.message;
      return Object.assign({}, state, { inProgress : false, errorMsg : errMsg });

    default: 
      return state;
  }
};