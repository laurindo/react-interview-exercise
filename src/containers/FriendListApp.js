import { connect } from 'react-redux';

import * as friendActions from '../actions/FriendsActions';
import * as paginationActions from '../actions/PaginationActions';
import Friends from '../components/FriendList/Friends';

const mapStateToProps = state => {
  return {
    friendsById: state.friendlist.friendsById,
    currentData: state.friendlist.currentData,
    pagination: state.friendlist.pagination,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    addFriend: (name, pagination) => {
      dispatch(friendActions.addFriend(name));
      dispatch(friendActions.showFriendsByPageLimit(pagination))
    },
    deleteFriend: id => dispatch(friendActions.deleteFriend(id)),
    starFriend: id => dispatch(friendActions.starFriend(id)),
    showFriendsByPageLimit: pagination => dispatch(friendActions.showFriendsByPageLimit(pagination)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Friends);
