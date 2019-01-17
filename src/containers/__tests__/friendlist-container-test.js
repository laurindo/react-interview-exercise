import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import FriendListItem from '../../components/FriendList/FriendListItem';

afterEach(cleanup);

test('can render with redux with defaults', () => {
  const props = {
    index: 1,
    id: '123',
    name: "Daniel Laurindo",
    gender: "male",
    starred: true,
    actions: {},
  };
});

