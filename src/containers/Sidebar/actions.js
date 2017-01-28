// import { push } from 'react-router-redux';  possibly will need later
import { firebase } from '../../utils/auth';
import * as types from './constants';

const logout = () => (dispatch) => {
  dispatch(logoutStarted());

  firebase.auth().signOut()
    .then(() => dispatch(logoutFinished()))
    .catch(() => dispatch(logoutFailer()));
};

const logoutStarted = () => (
  { type: types.LOGOUT_STARTED }
);

const logoutFinished = () => (
  { type: types.LOGOUT_FINISHED }
);

const logoutFailer = () => (
  { type: types.LOGOUT_FAILED }
);

export { logout };