import firebase from '../utils/auth';
import * as types from './actionTypes';

// ------------------------ BEGIN ACTION CREATORS ---------------------
const updateProfileStarted = () => (
  { type: types.UPDATE_PROFILE_STARTED }
);

const updateProfileFailed = error => (
  { type: types.UPDATE_PROFILE_FAILED, error }
);

const updateProfileFinished = () => 
  (dispatch) => {
    dispatch({ type: types.UPDATE_PROFILE_FINISHED, msg: 'Данные успешно обновлены' });
    setTimeout(() => { 
      dispatch({ type: types.UPDATE_MESSAGE_HIDE })
    }, 2000);
  }

// ------------------------ END ACTION CREATORS ---------------------

export const updateUserProfile = ({ email, displayName }) => 
  (dispatch) => {
    dispatch(updateProfileStarted());

    const user = firebase.auth().currentUser;

    user.updateEmail(email)
      .then(() => { 
        user.updateProfile({ displayName })
          .then(() => dispatch(updateProfileFinished()))
          .catch(err => dispatch(updateProfileFailed(err)))
      })
      .catch(err => dispatch(updateProfileFailed(err)));
  };

