import * as types from '../constants/ActionTypes';

export function addFriend(name) {
  return {
    type: types.ADD_FRIEND,
    name
  };
}

export function deleteFriend(id) {
  return {
    type: types.DELETE_FRIEND,
    id
  };
}

export function starFriend(id) {
  return {
    type: types.STAR_FRIEND,
    id
  };
}

export function showFriendsByPageLimit() {
  return {
    type: types.SHOW_FRIENDS_BY_PAGE,
  };
}

export function setFriendName(name) {
  return {
    type: types.SET_FRIEND_NAME,
    payload: name,
  };
}

export function setGender(gender) {
  return {
    type: types.SET_GENDER,
    payload: gender,
  };
}

export function clearGender() {
  return {
    type: types.CLEAR_GENDER,
  };
}

export function clearFriendName() {
  return {
    type: types.CLEAR_FRIEND_NAME,
  };
}
