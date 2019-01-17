import { connect } from 'react-redux';

import * as paginationActions from '../actions/PaginationActions';
import * as friendsActions from '../actions/FriendsActions';
import { Pagination } from '../components/Pagination'

const mapStateToProps = state => {
  return {
    currentPageNumber: state.friendlist.pagination.startingPage,
    friends: state.friendlist.friendsById,
    pageListNumber: state.friendlist.pagination.pageListNumber,
    pagination: state.friendlist.pagination,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    moveLeft: (pagination) => {
      dispatch(paginationActions.moveLeftPage(pagination));
      dispatch(friendsActions.showFriendsByPageLimit(pagination));
    },
    moveRight: (pagination) => {
      dispatch(paginationActions.moveRightPage(pagination));
      dispatch(friendsActions.showFriendsByPageLimit(pagination));
    },
    moveByNumber: (pagination, number) => {
      dispatch(paginationActions.moveByNumber(pagination, number));
      dispatch(friendsActions.showFriendsByPageLimit(pagination));
    },
    showPageItemsNumber: (data) => dispatch(paginationActions.showPageItemsNumber(data)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pagination);
