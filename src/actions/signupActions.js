import { push } from 'react-router-redux';
import firebase from '../utils/auth';
import * as types from './actionTypes';

// ------------------------ BEGIN ACTION CREATORS ---------------------
const signUpStarted = () => (
  { type: types.SIGNUP_STARTED }
);

const signUpFailed = err => (
  { type: types.SIGNUP_FAILED, err }
);
// ------------------------ END ACTION CREATORS ---------------------

const signUpFinished = () => (dispatch) => {
  dispatch({ type: types.SIGNUP_FINISHED });
  dispatch(push('/applications'));
};


const signUp = ({ email, password }) => (dispatch) => {
  dispatch(signUpStarted());

  firebase.default.auth().createUserWithEmailAndPassword(email, password)
    .then(() => dispatch(signUpFinished()))
    .catch(err => dispatch(signUpFailed(err)));
};

export default signUp;
