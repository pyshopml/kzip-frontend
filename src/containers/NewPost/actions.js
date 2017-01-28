/* ------------------------------------------------------------------------------
* action.js
*
* actions related to creating new posts
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import { push } from 'react-router-redux';
import { database } from '../../utils/auth';
import * as types from './constants';

const reference = '/posts';

const postCreateStarted = () => ({
  type: types.POST_CREATE_STARTED,
});

const postCreateFinished = () =>
  (dispatch) => {
    dispatch({ type: types.POST_CREATE_FINISHED });
    dispatch(push('/posts'));
  };

/*
const postCreateFailed = error => ({
  type: types.POST_CREATE_FAILED,
  error,
});
*/

export default data =>
  (dispatch) => {
    dispatch(postCreateStarted());

    const newPost = database.ref(reference).push();
    newPost.set(data);
    dispatch(postCreateFinished());
  };