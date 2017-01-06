import {firebase} from '../utils/auth.js';
import {push} from 'react-router-redux';

//------------------------ BEGIN ACTION CREATORS ---------------------
const signUpStarted = () => {
  return { type : 'SIGNUP_STARTED' };
}

const signUpFailed = (err) => {
  return { type : "SIGNUP_FAILED", err : err }
}
//------------------------ END ACTION CREATORS ---------------------

const signUpFinished = () => {
  return (dispatch) => {
    dispatch( {type : 'SIGNUP_FINISHED'} );
    dispatch( push('/applications') )
  }
}

const signUp = ({email, password}) => {
  return (dispatch) => {
    dispatch(signUpStarted());

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( () => dispatch( signUpFinished() ) )
      .catch( err => dispatch( signUpFailed(err) ) );
  }
}

export {signUp};