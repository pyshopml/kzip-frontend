import { AUTH_CHANGED } from '../constants/actionTypes';

const authChanged = user => ({
  type: AUTH_CHANGED,
  user,
});

export default authChanged;
