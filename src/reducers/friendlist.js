import * as types from '../constants/ActionTypes';
import * as paginationTypes from '../constants/PaginationTypes';
import PaginationSettings from '../config/PaginationSettings';
import { getUID } from '../utils/GeneralUtils';

const initialState = {
  friendsById: [
    {
      name: 'Theodore Roosevelt',
      starred: true,
      gender: 'male',
      id: getUID(),
    },
    {
      name: 'Abraham Lincoln',
      starred: false,
      gender: 'male',
      id: getUID(),
    },
    {
      name: 'George Washington',
      starred: false,
      gender: 'male',
      id: getUID(),
    }
  ],
  currentFriendName: '',
  currentGender: '',
  currentData: [],
  ...PaginationSettings,
};

export default function friends(state = initialState, action) {
  let pageNumber = null;

  switch (action.type) {
    case types.ADD_FRIEND: {
      if (!state.currentFriendName && !state.currentGender) {
        return { ...state };
      }
      return {
        ...state,
        friendsById: [
          {
            name: state.currentFriendName,
            gender: state.currentGender,
            id: getUID(),
          },
          ...state.friendsById,
        ],
      };
    };

    case types.DELETE_FRIEND: {
      let friends = [...state.friendsById];
      let friend = friends.filter((item, index) => item.id !== action.id);
      return {
        ...state,
        friendsById: friend,
      };
    };

    case types.STAR_FRIEND: {
      let friends = [...state.friendsById];
      let friend = friends.find((item, index) => item.id === action.id);
      friend.starred = !friend.starred;
      return {
        ...state,
        friendsById: friends
      };
    };

    case types.SET_FRIEND_NAME: {
      return {
        ...state,
        currentFriendName: action.payload,
      };
    };

    case types.CLEAR_FRIEND_NAME: {
      return {
        ...state,
        currentFriendName: '',
      };
    };

    case types.SET_GENDER: {
      return {
        ...state,
        currentGender: action.payload,
      };
    };

    case types.CLEAR_GENDER: {
      return {
        ...state,
        currentGender: '',
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
      pageNumber = (state.pagination.startingPage + 1 > action.payload.pageListNumber.length) ? action.payload.pageListNumber.length : state.pagination.startingPage + 1;
      return {
        ...state,
        pagination: {
          ...state.pagination,
          startingPage: pageNumber,
        },
      };
    };

    case paginationTypes.MOVE_BY_NUMBER: {
      pageNumber = (action.payload.number > action.payload.pageListNumber.length) ? action.payload.pageListNumber.length : action.payload.number;
      return {
        ...state,
        pagination: {
          ...state.pagination,
          startingPage: pageNumber,
        },
      };
    };

    case paginationTypes.SHOW_PAGE_NUMBER_ITEMS: {
      const total = Math.ceil(state.friendsById.length / state.pagination.pageSize);
      return {
        ...state,
        pagination: {
          ...state.pagination,
          pageListNumber: [...state.friendsById.slice(0, total)],
        },
      };
    };

    default:
      return state;
  }
}
