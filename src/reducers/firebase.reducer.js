import {
  CLEAR_FIREBASE,
  REQUEST_CREATE_ACCOUNT,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,
  REQUEST_SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  REQUEST_SIGN_OUT,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  REQUEST_VERIFY_USER,
  VERIFY_USER_SUCCESS,
  VERIFY_USER_NOONE_LOGGED_IN
} from "../actions/types";

const initialState = { isFetching: false, addExerciseSuccess: "initial" };

export default function articles(state = initialState, action) {
  switch (action.type) {
    case CLEAR_FIREBASE: {
      return Object.assign({}, state, {
        isFetching: false,
        db: null
      });
    }
    case REQUEST_CREATE_ACCOUNT: {
      return Object.assign({}, state, {
        isFetching: true
      });
    }
    case CREATE_ACCOUNT_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false,
        createAccountSuccess: true
      });
    }
    case CREATE_ACCOUNT_FAILURE: {
      return Object.assign({}, state, {
        isFetching: false,
        createAccountSuccess: false
      });
    }
    case REQUEST_SIGN_OUT: {
      return Object.assign({}, state, {
        isFetching: true
      });
    }
    case SIGN_OUT_SUCCESS: {
      return Object.assign({}, state, {
        user: null,
        isFetching: false
      });
    }
    case SIGN_OUT_FAILURE: {
      return Object.assign({}, state, {
        isFetching: false
      });
    }
    case REQUEST_SIGN_IN: {
      return Object.assign({}, state, {
        isFetching: true
      });
    }
    case SIGN_IN_SUCCESS: {
      return Object.assign({}, state, {
        user: action.payload.user,
        isFetching: false
      });
    }
    case SIGN_IN_FAILURE: {
      return Object.assign({}, state, {
        isFetching: false
      });
    }
    case REQUEST_VERIFY_USER: {
      return Object.assign({}, state, {
        isFetching: true,
        verifyingUser: true
      });
    }
    case VERIFY_USER_SUCCESS: {
      let workouts = [];
      if (action.payload.record && action.payload.record.exercises) {
        workouts = action.payload.record.exercises;
      }
      return Object.assign({}, state, {
        isFetching: false,
        verifyingUser: false,
        user: action.payload.user,
        record: workouts
      });
    }
    case VERIFY_USER_NOONE_LOGGED_IN: {
      return Object.assign({}, state, {
        isFetching: false,
        user: null,
        verifyingUser: false
      });
    }
    default:
      return state;
  }
}
