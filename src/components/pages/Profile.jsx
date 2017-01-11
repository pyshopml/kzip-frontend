import React, { PropTypes } from 'react';
import firebase from '../../utils/auth';

const Profile = () => {
  const user = firebase.auth().currentUser;

  return (<div>
      <h2>{ user ? user.email : '' }</h2>
    </div>);
};

export default Profile;