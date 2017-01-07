import { push } from 'react-router-redux';
import firebase from '../utils/auth';

// ------------------------ BEGIN ACTION CREATORS ---------------------
const loginStarted = () => (
  { type: 'LOGIN_STARTED' }
);

const loginFinisehd = () => (dispatch) => {
  dispatch({ type: 'LOGIN_FINISHED' });
  dispatch(push('/applications'));
};

const loginFailed = error => (
  { type: 'LOGIN_FAILED', error }
);

const logoutStarted = () => (
  { type: 'LOGOUT_STARTED' }
);

const logoutFinished = () => (
  { type: 'LOGOUT_FINISHED' }
);

const logoutFailer = () => (
  { type: 'LOGOUT_FAILED' }
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
