import {

  GET_USERS,
  GetUsersStateType,
  ActionTypes,
  SET_LOADING_STATUS,
  SEARCH_USERS,
} from "../action/actionType";

export const initialState: GetUsersStateType = {
  loading : false,
  search : [],
  users: [],
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export  const   usersDataReducer = (state = initialState, action: ActionTypes ) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case SET_LOADING_STATUS:
      return {
        ...state,
        loading: action.status,
      };
      case SEARCH_USERS:
        return {
          ...state,
         search: action.payload,
        };
    default:
      return state;
  }
}

