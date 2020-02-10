import { CHANGE_ROUTE } from '../actions/types';

const initialState = { isFetching: false, route: 'Home' };

export default function articles(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ROUTE: {
      return Object.assign({}, state, {
        isFetching: false,
        route: action.payload
      });
    }
    default:
      return state;
  }
}
