import * as types from '../constants/MessageTypes';

export function showSuccess(message) {
  return {
    type: types.SHOW_SUCCESS,
    payload: message,
  };
}

export function hideSuccess() {
  return {
    type: types.HIDE_SUCCESS,
  };
}
