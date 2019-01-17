import * as types from '../constants/MessageTypes';

const initialState = {
  showMessage: false,
  message: '',
};

export default function messages(state = initialState, action) {
  switch (action.type) {
    case types.SHOW_SUCCESS: {
      return {
        ...state,
        showMessage: true,
        message: action.payload,
      };
    };

    case types.HIDE_SUCCESS: {
      return {
        ...state,
        showMessage: false,
        message: '',
      };
    };

    default:
      return state;
  }
}
