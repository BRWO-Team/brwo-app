import { OPEN_LOGIN } from './types';

const setLogin = isOpen => {
  return dispatch => dispatch({ type: OPEN_LOGIN, payload: isOpen });
};

export { setLogin };
