import axios from 'axios';

import {
  REQUEST_ITEMS,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_ERROR,
  REQUEST_ADD_ITEM,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_ERROR
} from './types';

const getNItems = i => {
  return dispatch => {
    dispatch({ type: REQUEST_ITEMS });
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/' +
          process.env.REACT_APP_API_URL +
          'n/items?n=' +
          i,
        {
          'Access-Control-Allow-Origin': '*'
        }
      )
      .then(res => {
        dispatch({ type: GET_ITEMS_SUCCESS, payload: res });
      })
      .catch(error => {
        dispatch({ type: GET_ITEMS_ERROR });
      });
  };
};

const addItem = itemDetails => {
  return dispatch => {
    dispatch({ type: REQUEST_ADD_ITEM });
    axios
      .post(
        'https://cors-anywhere.herokuapp.com/https://api-dot-pacific-plating-262123.appspot.com/api/v1.0/items/postnew',
        itemDetails
      )
      .then(() => {
        dispatch({ type: ADD_ITEM_SUCCESS });
      })
      .catch(error => {
        dispatch({ type: ADD_ITEM_ERROR });
      });
  };
};

export { getNItems, addItem };
