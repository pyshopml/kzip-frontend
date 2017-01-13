import firebase from '../utils/auth';
import * as types from './actionTypes';

// ------------------------ BEGIN ACTION CREATORS ---------------------
const passwordChangeStarted = () => (
  { type: types.PASSWORD_UPDATE_STARTED }
);

const passwordChangeFailed = error => (
  { type: types.PASSWORD_UPDATE_FAILED, error }
);

const passwordChangeFinished = () => 
  (dispatch) => {
    dispatch({ type: types.PASSWORD_UPDATE_FINISHED, msg: 'Данные успешно обновлены' });
    setTimeout(() => { 
      dispatch({ type: types.UPDATE_MESSAGE_HIDE })
    }, 2000);
  }

// ------------------------ END ACTION CREATORS ---------------------

export const changePassword = ({ password }) => 
  (dispatch) => {
    dispatch(passwordChangeStarted());

    const user = firebase.auth().currentUser;

    user.updatePassword(password).then(
      () => {
        // Update successful.
        dispatch(passwordChangeFinished());
      }, 
      ({ message }) => {
        // An error happened.
        // console.log(err);
        dispatch(passwordChangeFailed(message));
      });
  };

