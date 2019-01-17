import reducer from '../../reducers/friendlist';
import * as types from '../../constants/ActionTypes';

describe('FRIENDLIST REDUCERS', () => {

  it('should return initial reducer', () => {
    const result = reducer(undefined, {});
    expect(result.currentFriendName).toEqual('');
    expect(result.currentGender).toEqual('');
    expect(result.currentData).toEqual([]);
    expect(result.friendsById[0].name).toEqual('Theodore Roosevelt');
    expect(result.friendsById[0].starred).toEqual(true);
    expect(result.friendsById[0].gender).toEqual('male');

    expect(result.pagination.pageSize).toEqual(2);
    expect(result.pagination.startingPage).toEqual(1);
    expect(result.pagination.pageListNumber).toEqual([]);
  });

  it('should handle SET_FRIEND_NAME', () => {
    const action = {
      type: types.SET_FRIEND_NAME,
      payload: "Daniel Laurindo"
    };
    const result = reducer([], action);

    expect(result).toEqual({
      currentFriendName: "Daniel Laurindo"
    });
  });

  it('should handle STAR_FRIEND', () => {
    const state = reducer(undefined, {});
    const id = state.friendsById[0].id;
    const action = {
      type: types.STAR_FRIEND,
      id,
    };
    const result = reducer(state, action);
    expect(result.friendsById[0].starred).toEqual(false);

    const result2 = reducer(state, action);
    expect(result2.friendsById[0].starred).toEqual(true);
  });

  it('should handle STAR_FRIEND', () => {
    const state = reducer(undefined, {});
    const id = state.friendsById[0].id;
    const action = {
      type: types.STAR_FRIEND,
      id,
    };
    const result = reducer(state, action);
    expect(result.friendsById[0].starred).toEqual(false);

    const result2 = reducer(state, action);
    expect(result2.friendsById[0].starred).toEqual(true);
  });

  it('should handle DELETE_FRIEND', () => {
    const state = reducer(undefined, {});

    // Checking Old User
    expect(state.friendsById[0].name).toEqual("Theodore Roosevelt");
    const id = state.friendsById[0].id;

    // delete a friend
    const actionDeleteFriend = {
      type: types.DELETE_FRIEND,
      id,
    };
    const newState = reducer(state, actionDeleteFriend);

    // Checking New User after old has been removed
    expect(newState.friendsById[0].name).toEqual("Abraham Lincoln");
  });
});
