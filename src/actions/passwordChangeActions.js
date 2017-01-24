import firebase from '../utils/auth';
import * as types from '../constants/actionTypes';

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

export const changePassword = ({ oldPassword, newPassword }) => 
  (dispatch) => {
    dispatch(passwordChangeStarted());

    const user = firebase.auth().currentUser;
    const credential = firebase.auth.EmailAuthProvider.credential(
      user.email,
      oldPassword
    );

    user.reauthenticate(credential)
      .then(() => {
        // User re-authenticated.

        user.updatePassword(newPassword)
          .then( () => {
            // Update successful.
            dispatch(passwordChangeFinished());
          }, 
          ({ message }) => {
            // An error happened.
            dispatch(passwordChangeFailed(message));
          });
      }, 
      ({ message }) => {
        // An error happened.
        dispatch(passwordChangeFailed(message));
      });
  };

