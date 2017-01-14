/* ------------------------------------------------------------------------------
* postsActions.js
*
* posts related actions
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import { database } from '../utils/auth';
import * as types from './actionTypes';

const reference = '/posts';

const postCreateStarted = () => ({
  type: 'POST_CREATE_STARTED'
});

const postCreateFinished = () => ({
  type: 'POST_CREATE_FINISHED'
});

const postCreateFailed = (error) => ({
  type: 'POST_CREATE_FAILED', 
  error
});

export const createPost = (data) => 
  (dispatch) => {
    console.log(data);
    dispatch(postCreateStarted());

    const newPost = database.ref(reference).push();
    newPost.set(data);
  };
