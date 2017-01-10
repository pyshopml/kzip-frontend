import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Profile = ({ user }) => (
  <div>
    <h2>{ user.email }</h2>
  </div>
);

Profile.propTypes = {
  user: PropTypes.shape().isRequired,
};

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
});

export default connect(mapStateToProps)(Profile);
