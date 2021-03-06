import {
  REQUEST_ITEMS,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_ERROR,
  REQUEST_ADD_ITEM,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_ERROR
} from '../actions/types';

const initialState = { isFetching: false };

export default function articles(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ITEMS: {
      return Object.assign({}, state, {
        isFetching: true
      });
    }
    case GET_ITEMS_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false,
        current: action.payload.data.items
      });
    }
    case GET_ITEMS_ERROR: {
      return Object.assign({}, state, {
        isFetching: false
      });
    }
    case REQUEST_ADD_ITEM: {
      return Object.assign({}, state, {
        isFetching: true
      });
    }
    case ADD_ITEM_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false
      });
    }
    case ADD_ITEM_ERROR: {
      return Object.assign({}, state, {
        isFetching: false
      });
    }
    default:
      return state;
  }
}
