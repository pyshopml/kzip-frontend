/* ------------------------------------------------------------------------------
* auth.js
*
* firebase related stuff
*
* Nick Luparev nikita.luparev@gmail.com
------------------------------------------------------------------------------- */
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAgmcEW0yE5lrD8Qk1RRS6IbGNOBY9dIvA',
  authDomain: 'kzip-78115.firebaseapp.com',
  databaseURL: 'https://kzip-78115.firebaseio.com',
  storageBucket: 'kzip-78115.appspot.com',
  messagingSenderId: '464689250681',
};

firebase.initializeApp(config);

// const db = firebase.database();

// const errCatch = (err) => {
//   const { code, message } = err;
//   console.log(`${code} - ${message}`);
// };

// const signUp = (email, password) => {
//   firebase.auth().createUserWithEmailAndPassword(email, password).catch(errCatch);
// };

// const signIn = (email, password) => {
//   firebase.auth().signInWithEmailAndPassword(email, password).catch(errCatch);
// };

// const signOut = cb => {
//   return () => {
//     firebase.auth().signOut().then(cb, (err) => {
//       console.log(err);
//     });
//   };
// };

// const onAuthChange = cb => {
//   firebase.auth().onAuthStateChanged(cb);
// };

export default firebase;
