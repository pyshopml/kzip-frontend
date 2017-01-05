import {firebase} from '../utils/auth.js';

const signUpStarted = () => {
  return { type : 'SIGNUP_STARTED' };
}

const signUpFinished = () => {
  return { type : 'SIGNUP_FINISHED' };
}

const signUpFailed = (err) => {
  return { type : "SIGNUP_FAILED", err : err }
}

const signUp = ({email, password}) => {
  return (dispatch) => {
    dispatch(signUpStarted());

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( () => dispatch(signUpFinished()) )
      .catch( err => dispatch(signUpFailed(err)) );
  }
}

export {signUp};