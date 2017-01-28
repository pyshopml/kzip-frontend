/* ------------------------------------------------------------------------------
* routes.jsx
*
* main routing config file
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import App from './containers/App';
import Posts from './containers/PostsPage';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Settings from './containers/SettingsPage';
import Profile from './containers/ProfilePage';
import AccountSettings from './containers/AccountSettings';
import PasswordSettings from './containers/PasswordSettings';
import Notifications from './containers/NotificationsSettings';
import NewPost from './containers/NewPost';

export default (store) => {

  const MatchWhenAuthed = (nextState, replace) => {
    const { global: { login: { authed } } } = store.getState();
    if (!authed) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname },
      });
    }
  };

  return (
    <Route name="app" path="/" component={App} >
      <IndexRoute component={Posts} />
      <Route path="/posts" component={ Posts } />
      <Route path="/login" component={ Login } />
      <Route path="/signup" component={ Signup } />
      <Route path="/settings" component={ Settings } onEnter={ MatchWhenAuthed }>
        <IndexRedirect to="account" />
        <Route path="account" component={AccountSettings} />
        <Route path="password" component={PasswordSettings} />
        <Route path="notifications" component={Notifications} />
      </Route>
      <Route path="/profile" component={ Profile } />
      <Route path="/newpost" component={ NewPost } onEnter={ MatchWhenAuthed } />
    </Route>
  );
};
