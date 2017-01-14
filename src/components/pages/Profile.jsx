import React, { PropTypes } from 'react';
import { firebase } from '../../utils/auth';

const Profile = () => {
  const user = firebase.auth().currentUser;

  return (<div>
      <h3>{ user ? `Username: ${user.displayName}` : '' }</h3>
      <h3>{ user ? `E-mail: ${user.email}` : '' }</h3>
    </div>);
};

export default Profile;