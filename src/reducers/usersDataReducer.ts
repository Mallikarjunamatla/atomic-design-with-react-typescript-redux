import { 
	SET_LOADING_STATUS,
	 GET_USERS,
	GetUsersStateType,
	PostActionTypes
 } from "../action/actionType";

export const initialState : GetUsersStateType = {
	loading: false,
	users: [],
};

function usersDataReducer(state = initialState, action : PostActionTypes) {
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
		default:
			return state;
	}
}

export default usersDataReducer;
