import User from "../model/model";

export const SET_LOADING_STATUS = "SET_LOADING_STATUS";
export const GET_USERS = "GET_USERS";

export interface GetUsersStateType {
  loading: boolean;
  users: User[];
}

interface GetUsersActionType {
  type: typeof GET_USERS;
  payload: User[];
}

interface GetUsersLoadingActionType {
  type: typeof SET_LOADING_STATUS;
  status: boolean;
}
export type PostActionTypes = GetUsersActionType | GetUsersLoadingActionType;
