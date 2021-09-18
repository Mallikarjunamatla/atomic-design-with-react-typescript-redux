import User from "../model/model";

export const SET_LOADING_STATUS = "SET_LOADING_STATUS";
export const GET_USERS = "GET_USERS";
export const SEARCH_USERS = "GET_USERS";

export interface GetUsersStateType {
  loading: boolean;
  search: User[];
  users: User[];
}

interface GetUsersActionType {
  type: typeof GET_USERS;
  payload: User[];
}
interface SearchActionType {
  type: typeof SEARCH_USERS;
  payload: User[];
}
interface GetUsersLoadingActionType {
  type: typeof SET_LOADING_STATUS;
  status: boolean;
}
export type ActionTypes =
  | GetUsersActionType
  | GetUsersLoadingActionType
  | SearchActionType;
