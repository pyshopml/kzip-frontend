import { push } from 'react-router-redux';
import { firebase } from '../../utils/auth';
import * as types from './constants';

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
// ------------------------ END ACTION CREATORS ---------------------

const login = ({ email, password }) => (dispatch) => {
  dispatch(loginStarted());

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => dispatch(loginFinisehd()))
    .catch(err => dispatch(loginFailed(err)));
};

export { login };
