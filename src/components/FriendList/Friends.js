import React, { Component } from 'react';
import styles from './styles/FriendList.css';
import FriendList from './FriendList';
import AddFriendInput from './AddFriendInput';
import PaginationApp from '../../containers/PaginationApp';

class Friends extends Component {
  componentDidMount() {
    const { pagination, showFriendsByPageLimit } = this.props;
    showFriendsByPageLimit(pagination);
  }

  render() {
    const {
      addFriend,
      deleteFriend,
      starFriend,
      pagination,
      currentData
    } = this.props;

    const actions = {
      addFriend,
      deleteFriend,
      starFriend,
    };

    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendInput addFriend={actions.addFriend} />
        <FriendList
          pagination={pagination}
          friends={currentData}
          actions={actions} />
        <PaginationApp />
      </div>
    );
  }
}

export default Friends;
