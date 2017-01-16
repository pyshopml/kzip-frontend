import { push } from 'react-router-redux';
import { firebase } from '../utils/auth';
import * as types from '../constants/actionTypes';

// ------------------------ BEGIN ACTION CREATORS ---------------------
const signUpStarted = () => (
  { type: types.SIGNUP_STARTED }
);

const signUpFailed = error => (
  { type: types.SIGNUP_FAILED, error }
);
// ------------------------ END ACTION CREATORS ---------------------

const signUpFinished = () => (dispatch) => {
  dispatch({ type: types.SIGNUP_FINISHED });
  dispatch(push('/posts'));
};

const signUp = ({ email, password }) => (dispatch) => {
  dispatch(signUpStarted());

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => dispatch(signUpFinished()))
    .catch(err => dispatch(signUpFailed(err)));
};

export default signUp;
