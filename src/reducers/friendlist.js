import * as types from '../constants/ActionTypes';
import * as paginationTypes from '../constants/PaginationTypes';
import PaginationSettings from '../config/PaginationSettings';

const initialState = {
  friendsById: [
    {
      name: 'Theodore Roosevelt',
      starred: true,
      gender: 'male',
    },
    {
      name: 'Abraham Lincoln',
      starred: false,
      gender: 'male',
    },
    {
      name: 'George Washington',
      starred: false,
      gender: 'male',
    }
  ],
  currentData: [],
  ...PaginationSettings,
};

export default function friends(state = initialState, action) {
  let pageNumber = null;

  switch (action.type) {
    case types.ADD_FRIEND: {
      return {
        ...state,
        friendsById: [
          ...state.friendsById,
          {
            name: action.name,
            gender: action.gender,
          }
        ],
      };
    };

    case types.DELETE_FRIEND: {
      return {
        ...state,
        friendsById: state.friendsById.filter((item, index) => index !== action.id)
      };
    };

    case types.STAR_FRIEND: {
      let friends = [...state.friendsById];
      let friend = friends.find((item, index) => index === action.id);
      friend.starred = !friend.starred;
      return {
        ...state,
        friendsById: friends
      };
    };

    case types.SHOW_FRIENDS_BY_PAGE: {
      const { pageSize, startingPage } = state.pagination;
      const upperLimit = startingPage * pageSize;
      const currentData = state.friendsById.slice((upperLimit - pageSize), upperLimit);

      return {
        ...state,
        currentData,
      };
    };

    case paginationTypes.MOVE_LEFT_PAGE: {
      pageNumber = (state.pagination.startingPage - 1 <= 0) ? 1 : state.pagination.startingPage - 1;
      return {
        ...state,
        pagination: {
          ...state.pagination,
          startingPage: pageNumber,
        },
      };
    };

    case paginationTypes.MOVE_RIGHT_PAGE: {
      pageNumber = (state.pagination.startingPage + 1 > action.payload.length) ? action.payload.length : state.pagination.startingPage + 1;
      return {
        ...state,
        pagination: {
          ...state.pagination,
          startingPage: pageNumber,
        },
      };
    };

    case paginationTypes.SHOW_PAGE_NUMBER_ITEMS: {
      const total = Math.ceil(action.payload.length / state.pagination.pageSize);
      return {
        ...state,
        pagination: {
          ...state.pagination,
          pageListNumber: [...action.payload.slice(0, total)],
        },
      };
    };

    default:
      return state;
  }
}
