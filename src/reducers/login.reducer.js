import { OPEN_LOGIN } from '../actions/types';

const initialState = { isFetching: false, isOpen: false };

export default function articles(state = initialState, action) {
  switch (action.type) {
    case OPEN_LOGIN: {
      return Object.assign({}, state, {
        isFetching: false,
        isOpen: action.payload
      });
    }
    default:
      return state;
  }
}
