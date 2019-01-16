import { connect } from 'react-redux';

import * as friendActions from '../actions/FriendsActions';
import Friends from '../components/FriendList/Friends';

const mapStateToProps = state => {
  return {
    friendsById: state.friendlist.friendsById,
    currentData: state.friendlist.currentData,
    pagination: state.pagination,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    addFriend: name => dispatch(friendActions.addFriend(name)),
    deleteFriend: id => dispatch(friendActions.deleteFriend(id)),
    starFriend: id => dispatch(friendActions.starFriend(id)),
    showFriendsByPageLimit: pagination => dispatch(friendActions.showFriendsByPageLimit(pagination)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Friends);
