import * as types from '../constants/PaginationTypes';
import PaginationSettings from '../config/PaginationSettings';

const initialState = {
  ...PaginationSettings,
};

export default function pagination(state = initialState, action) {
  let pageNumber = null;
  switch (action.type) {
    case types.MOVE_LEFT_PAGE:
      pageNumber = (state.startingPage - 1 <= 0) ? 1 : state.startingPage - 1;
      return {
        ...state,
        startingPage: pageNumber,
      };
    case types.MOVE_RIGHT_PAGE:
      pageNumber = (state.startingPage + 1 > action.payload.length) ? action.payload.length : state.startingPage + 1;
      return {
        ...state,
        startingPage: pageNumber,
      };
    case types.SHOW_PAGE_NUMBER_ITEMS:
      const total = Math.ceil(action.payload.length / state.pageSize);
      return {
        ...state,
        pageListNumber: action.payload.slice(0, total),
      };
    default:
      return state;
  }
}
