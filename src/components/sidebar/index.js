import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import Authbar from './Authbar';
import authChanged from '../../actions/authActions';
import firebase from '../../utils/auth';
import UserPanel from './UserPanel';

class Sidebar extends Component {
  componentDidMount() {
    const { authUpdate } = this.props;
    this.unsub = firebase.default.auth().onAuthStateChanged((user) => {
      if (user) {
        const { email, uid, displayName } = user;
        authUpdate({ email, uid, displayName });
      } else {
        authUpdate(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsub();
  }

  render() {
    const { user } = this.props;

    return (
      <aside>
        <div className="logo-area">
          <h2>ЯГражданин</h2>
        </div>

        {user ? <UserPanel user={user} /> : <Authbar /> }
        <Navigation />

      </aside>
    );
  }
}

Sidebar.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    uid: PropTypes.string.isRequired,
    displayName: PropTypes.string,
  }),
  authUpdate: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth }) => (
  { user: auth.user }
);

const mapDispatchToProps = dispatch => (
  { authUpdate: user => dispatch(authChanged(user)) }
);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
