import React from 'react';
import Adapter from 'enzyme-adapter-react-15';
import { configure } from 'enzyme';
import { mount } from 'enzyme';
import FriendListItem from '../../components/FriendList/FriendListItem';
import reducer from '../../reducers/friendlist';
import * as types from '../../constants/ActionTypes';
import * as actions from '../../actions/FriendsActions';

configure({ adapter: new Adapter() });

const props = {
  index: 1,
  id: '123',
  name: "Daniel Laurindo",
  gender: "male",
  starred: true,
  starFriend: actions.starFriend,
  deleteFriend: actions.deleteFriend,
  actions: {},
};

describe('', () => {
  it('Should FriendListItem component correctly', () => {
    mount(<FriendListItem {...props} />);
  });

  it('Should get two buttons from component', () => {
    const componentWrapper = mount(<FriendListItem {...props} />);
    const btn = componentWrapper.find("button").length;
    expect(btn).toBe(2);
  });

  it('Should get <small> with gender', () => {
    const componentWrapper = mount(<FriendListItem {...props} />);
    const tagSmall = componentWrapper.find("small.gender").length;
    expect(tagSmall).toBe(1);
  });

  it('Should set a STAR to friend', () => {
    const state = reducer(undefined, {});
    const id = state.friendsById[0].id;
    const componentWrapper = mount(<FriendListItem {...props} id={id} />);
    componentWrapper.find('button.star').simulate('click');
    const starredFalse = componentWrapper.find(".fa-star-o").length;
    expect(starredFalse).toBe(0);

    componentWrapper.find('button.star').simulate('click');
    const starredTrue = componentWrapper.find(".fa-star").length;
    expect(starredTrue).toBe(1);
  });
});

