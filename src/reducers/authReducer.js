const model = {
  user: null,
};

export default (state = model, action) => {
  switch (action.type) {
    case 'AUTH_CHANGED':
      return Object.assign({}, state, { user: action.user });

    case 'LOGOUT_FINISHED':
      return Object.assign({}, state, { user: null });

    default:
      return state;
  }
};
