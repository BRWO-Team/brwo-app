import firebase from 'firebase';
import {
  CLEAR_FIREBASE,
  REQUEST_CREATE_ACCOUNT,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,
  REQUEST_SIGN_IN,
  SIGN_IN_FAILURE,
  REQUEST_SIGN_OUT,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  REQUEST_VERIFY_USER,
  VERIFY_USER_SUCCESS,
  VERIFY_USER_NOONE_LOGGED_IN
} from './types';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_ID,
  authDomain: 'pacific-plating-262123.firebaseapp.com',
  databaseURL: 'https://pacific-plating-262123.firebaseio.com',
  projectId: 'pacific-plating-262123'
};

firebase.initializeApp(config);

const clearFirebase = () => {
  return dispatch => {
    dispatch({ type: CLEAR_FIREBASE });
  };
};

const createAccount = (email, password, name) => {
  return dispatch => {
    dispatch({ type: REQUEST_CREATE_ACCOUNT });
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        dispatch({ type: CREATE_ACCOUNT_SUCCESS });
        res.user.updateProfile({
          displayName: name
        });

        dispatch({ type: VERIFY_USER_SUCCESS, payload: { res } });
      })
      .catch(error => {
        dispatch({ type: CREATE_ACCOUNT_FAILURE, error });
      });
  };
};
const signin = (email, password) => {
  return dispatch => {
    dispatch({ type: REQUEST_SIGN_IN });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        dispatch({ type: VERIFY_USER_SUCCESS, payload: { res } });
      })
      .catch(error => {
        dispatch({ type: SIGN_IN_FAILURE, error });
      });
  };
};

const signout = () => {
  return dispatch => {
    dispatch({ type: REQUEST_SIGN_OUT });
    firebase
      .auth()
      .signOut()
      .then(() => dispatch({ type: SIGN_OUT_SUCCESS }))
      .catch(error => {
        dispatch({ type: SIGN_OUT_FAILURE, error });
      });
  };
};

const verifyUser = () => {
  return dispatch => {
    dispatch({ type: REQUEST_VERIFY_USER });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch({ type: VERIFY_USER_SUCCESS, payload: { user } });
      } else {
        dispatch({ type: VERIFY_USER_NOONE_LOGGED_IN });
      }
    });
  };
};

export { clearFirebase, createAccount, signin, signout, verifyUser };
