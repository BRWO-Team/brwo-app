import axios from 'axios';

import { REQUEST_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_ERROR } from './types';

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

export { getNItems };
