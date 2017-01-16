import { push } from 'react-router-redux';
import { firebase } from '../utils/auth';
import * as types from './actionTypes';

// ------------------------ BEGIN ACTION CREATORS ---------------------
const loginStarted = () => (
  { type: types.LOGIN_STARTED }
);

const loginFinisehd = () => (dispatch) => {
  dispatch({ type: types.LOGIN_FINISHED });
  dispatch(push('/posts'));
};

const loginFailed = error => (
  { type: types.LOGIN_FAILED, error }
);

const logoutStarted = () => (
  { type: types.LOGOUT_STARTED }
);

const logoutFinished = () =>
  (dispatch) => {
    dispatch({ type: types.LOGOUT_FINISHED });
    dispatch(push('/posts'));
  };

const logoutFailer = () => (
  { type: types.LOGOUT_FAILED }
);
// ------------------------ END ACTION CREATORS ---------------------

const login = ({ email, password }) => (dispatch) => {
  dispatch(loginStarted());

  firebase.default.auth().signInWithEmailAndPassword(email, password)
    .then(() => dispatch(loginFinisehd()))
    .catch(err => dispatch(loginFailed(err)));
};

const logout = () => (dispatch) => {
  dispatch(logoutStarted());

  firebase.default.auth().signOut()
    .then(() => dispatch(logoutFinished()))
    .catch(() => dispatch(logoutFailer()));
};

export { login, logout };
