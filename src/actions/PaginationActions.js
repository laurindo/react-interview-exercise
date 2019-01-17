import * as types from '../constants/PaginationTypes';

export function moveLeftPage(data) {
  return {
    type: types.MOVE_LEFT_PAGE,
    payload: data,
  };
}

export function moveRightPage(data) {
  return {
    type: types.MOVE_RIGHT_PAGE,
    payload: data,
  };
}

export function moveByNumber(data, number) {
  return {
    type: types.MOVE_BY_NUMBER,
    payload: { ...data, number },
  };
}

export function showPageItemsNumber(data) {
  return {
    type: types.SHOW_PAGE_NUMBER_ITEMS,
    payload: data,
  };
}
