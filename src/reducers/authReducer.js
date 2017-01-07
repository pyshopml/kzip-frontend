const model = {
  user : null
};

export default (state=model, action) => {
  switch (action.type) {
    case 'AUTH_CHANGED': 
      return Object.assign({}, state, { user : action.user });

    default: 
      return state;
  }
}