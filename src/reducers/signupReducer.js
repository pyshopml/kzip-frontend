const model = {
  inProgress: false,
  errorMsg: 'hello world',
};

export default (state = model, action) => {
  const { message } = action.err || '';

  switch (action.type) {
    case 'SIGNUP_STARTED':
      return Object.assign({}, state, { inProgress: true });

    case 'SIGNUP_FINISHED':
      return Object.assign({}, state, { inProgress: false, errorMsg: '' });

    case '@@router/LOCATION_CHANGE':
      return Object.assign({}, state, { inProgress: false, errorMsg: '' });

    case '@@redux-form/CHANGE':
      return Object.assign({}, state, { message: '' });

    case 'SIGNUP_FAILED':
      return Object.assign({}, state, { inProgress: false, errorMsg: message });

    default:
      return state;
  }
};
