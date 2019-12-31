import { combineReducers } from 'redux';

import login from './login.reducer';
import items from './items.reducer';
import firebase from './firebase.reducer';
import router from './router.reducer';

const rootReducer = combineReducers({ firebase, router, items, login });

export default rootReducer;
