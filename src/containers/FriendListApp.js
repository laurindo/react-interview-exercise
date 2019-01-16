import { connect } from 'react-redux';

import * as friendActions from '../actions/FriendsActions';
import * as paginationActions from '../actions/PaginationActions';
import * as messageActions from '../actions/MessageActions';
import Friends from '../components/FriendList/Friends';

const mapStateToProps = state => {
  return {
    friendsById: state.friendlist.friendsById,
    currentData: state.friendlist.currentData,
    pagination: state.friendlist.pagination,
    showMessage: state.message.showMessage,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setGender: (gender) => {
      dispatch(friendActions.setGender(gender));
    },
    setFriendName: (name) => {
      dispatch(friendActions.setFriendName(name));
    },
    addFriend: (pagination) => {
      dispatch(friendActions.addFriend());
      dispatch(friendActions.showFriendsByPageLimit(pagination));
      dispatch(paginationActions.showPageItemsNumber());
      dispatch(friendActions.clearGender());
      dispatch(friendActions.clearFriendName());
      dispatch(messageActions.showSuccess('success!!!!'));
    },
    deleteFriend: id => {
      dispatch(friendActions.deleteFriend(id));
      dispatch(friendActions.showFriendsByPageLimit());
      dispatch(paginationActions.showPageItemsNumber());
    },
    starFriend: id => dispatch(friendActions.starFriend(id)),
    showFriendsByPageLimit: pagination => dispatch(friendActions.showFriendsByPageLimit(pagination)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Friends);
