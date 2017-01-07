import React, {createClass, PropTypes} from 'react';
import Navigation from './Navigation.jsx';
import Authbar from './Authbar.jsx';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {authChanged} from '../../actions/authActions.js';
import {firebase} from '../../utils/auth.js';
import UserPanel from  './UserPanel.jsx';

const Sidebar = createClass({
  propTypes : {
    user : PropTypes.object,
    authUpdate : PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      unsub : null  
    }
  },

  componentDidMount () {
    let {authUpdate} = this.props;

    const unsub = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        let {email, uid, displayName} = user;
        authUpdate({email, uid, displayName});  
      } else {
        authUpdate(null)
      }
      
    });
    this.setState({ unsub });
  },

  componentWillUnmount () {
    this.state.unsub();
  },

  render () {
    let {user} = this.props;

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
});

const mapStateToProps = ({ auth }, ownProps) => {
  return {
    user : auth.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authUpdate : (user) => dispatch( authChanged(user) ) 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);