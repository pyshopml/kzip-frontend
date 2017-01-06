import {firebase} from '../utils/auth.js';
import {push} from 'react-router-redux';

//------------------------ BEGIN ACTION CREATORS ---------------------
const loginStarted = () => {
  return { type : 'LOGIN_STARTED' };
}

const loginFinisehd = () => {
  return (dispatch) => {
    dispatch( { type : 'LOGIN_FINISHED' } );
    dispatch( push('/applications') );
  }
}

const loginFailed = (error) => {
  return { type : 'LOGIN_FAILED', error };
}
//------------------------ END ACTION CREATORS ---------------------

const login = ({email, password}) => {
  return (dispatch) => {
    dispatch( loginStarted() );

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then( () => dispatch( loginFinisehd() ) )
      .catch( err => dispatch( loginFailed(err) ) );
  }
}

export {login};