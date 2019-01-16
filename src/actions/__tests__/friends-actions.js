import {
  addFriend,
  deleteFriend,
  starFriend,
  showFriendsByPageLimit,
  setFriendName,
  setGender,
  clearGender,
  clearFriendName,
} from '../FriendsActions';

import * as types from '../../constants/ActionTypes';

test('#01 Testing Add Friends Actions', () => {
  const name = 'John';
  const expectedAction = {
    type: types.ADD_FRIEND,
    name,
  };

  expect(addFriend().type).toBe('ADD_FRIEND');
  expect(addFriend(name)).toEqual(expectedAction);
});

test('#02 Testing Delete Friends Actions', () => {
  const id = '123';
  const expectedAction = {
    type: types.DELETE_FRIEND,
    id,
  };
  expect(deleteFriend().type).toBe('DELETE_FRIEND');
  expect(deleteFriend(id)).toEqual(expectedAction);
});

test('#03 Testing Star Friends Actions', () => {
  const id = '123';
  const expectedAction = {
    type: types.STAR_FRIEND,
    id,
  };
  expect(starFriend().type).toBe('STAR_FRIEND');
  expect(starFriend(id)).toEqual(expectedAction);
});

test('#04 Testing Show Friends List Paginated Friends Actions', () => {
  expect(showFriendsByPageLimit().type).toBe('SHOW_FRIENDS_BY_PAGE');
});

test('#05 Testing Set Friends Actions', () => {
  const name = 'Ana';
  const expectedAction = {
    type: types.SET_FRIEND_NAME,
    payload: name,
  };
  expect(setFriendName().type).toBe('SET_FRIEND_NAME');
  expect(setFriendName(name)).toEqual(expectedAction);
});

test('#06 Testing Set Gender Friends Actions', () => {
  expect(setGender().type).toBe('SET_GENDER');
  expect(setGender({ gender: 'male' }).payload.gender).toBe('male');
});

test('#07 Testing Clear Gender Friends Actions', () => {
  expect(clearGender().type).toBe('CLEAR_GENDER');
});

test('#08 Testing Clear Friend Name Friends Actions', () => {
  expect(clearFriendName().type).toBe('CLEAR_FRIEND_NAME');
});
