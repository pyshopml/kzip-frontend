import { push } from 'react-router-redux';
import firebase from '../utils/auth';

// ------------------------ BEGIN ACTION CREATORS ---------------------
const signUpStarted = () => (
  { type: 'SIGNUP_STARTED' }
);

const signUpFailed = err => (
  { type: 'SIGNUP_FAILED', err }
);
// ------------------------ END ACTION CREATORS ---------------------

const signUpFinished = () => (dispatch) => {
  dispatch({ type: 'SIGNUP_FINISHED' });
  dispatch(push('/applications'));
};


const signUp = ({ email, password }) => (dispatch) => {
  dispatch(signUpStarted());

  firebase.default.auth().createUserWithEmailAndPassword(email, password)
    .then(() => dispatch(signUpFinished()))
    .catch(err => dispatch(signUpFailed(err)));
};

export default signUp;
