import React, { Component } from 'react';
import styles from './FriendListApp.css';
import { connect } from 'react-redux';

import * as friendActions from '../actions/FriendsActions';
import { FriendList, AddFriendInput } from '../components/FriendList';

class FriendListApp extends Component {

  render () {
    const { friendsById, addFriend, deleteFriend, starFriend } = this.props;
    const actions = {
      addFriend,
      deleteFriend,
      starFriend,
    };

    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendInput addFriend={actions.addFriend} />
        <FriendList friends={friendsById} actions={actions} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friendsById: state.friendlist.friendsById,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    addFriend: name => dispatch(friendActions.addFriend(name)),
    deleteFriend: id => dispatch(friendActions.deleteFriend(id)),
    starFriend: id => dispatch(friendActions.starFriend(id)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FriendListApp)
