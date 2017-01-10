import firebase from '../utils/auth';
import * as types from './actionTypes';

// ------------------------ BEGIN ACTION CREATORS ---------------------
const updateProfileStarted = () => (
  { type: types.UPDATE_PROFILE_STARTED }
);

const updateProfileFailed = error => (
  { type: types.UPDATE_PROFILE_FAILED, error }
);
// ------------------------ END ACTION CREATORS ---------------------

const updateProfileFinished = () => 
  dispatch => 
    dispatch({ type: types.UPDATE_PROFILE_FINISHED });

export const updateUserProfile = ({ email, username }) => 
  (dispatch) => {
    dispatch(updateProfileStarted());

    const user = firebase.auth().currentUser;

    user.updateEmail(email)
      .then(() => { 
        user.updateProfile({ displayName: username })
          .then(() => dispatch(updateProfileFinished()))
          .catch(err => dispatch(updateProfileFailed(err)))
      })
      .catch(err => dispatch(updateProfileFailed(err)));
  };

