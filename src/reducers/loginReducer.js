const model = {
  inProgress : false,
  errorMsg : ""
};

export default (state=model, action) => {
  switch (action.type) {
    case 'LOGIN_STARTED':
      return Object.assign({}, state, { inProgress : true });

    case 'LOGIN_FINISHED':
      return Object.assign({}, state, { inProgress : false, errorMsg : "" });      

    case 'LOGIN_FAILED':
      return Object.assign({}, state, { inProgress : false, errorMsg : action.error.message });

    case "@@router/LOCATION_CHANGE":
      return Object.assign({}, state, { inProgress : false, errorMsg : "" });

    case "@@redux-form/CHANGE": 
      return Object.assign({}, state, { errorMsg : "" });

    default: 
      return state;
  }
}