import User from "../model/model";
import { SET_LOADING_STATUS, GET_USERS, ActionTypes, SEARCH_USERS } from "./actionType";
import { Dispatch } from "redux";
const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const setLoading = (status: boolean): ActionTypes => {
  return {
    type : SET_LOADING_STATUS,
    status: status,
  };
};
export const getUsersAction = (users: User[]): ActionTypes => {
  console.log("GetUSEACTION");
  return {
    type: GET_USERS,
    payload: users,
  };
};
export const searchUsers = (search : User[]): ActionTypes => {
	return {
		type: SEARCH_USERS,
		payload: search,

	};
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function getUsersAPI() {
  console.log("GetUSERAPI");
  return (dispatch: Dispatch<ActionTypes>) =>{
    dispatch(setLoading(true))
    fetch(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `${baseUrl}users`,
      {
        method: "GET",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        
        dispatch(getUsersAction(data));
        dispatch(setLoading(false))
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
        console.log("ERROR");
      });
}
}

export function searchUsersAPI(payload : { text : string}) {
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	return(dispatch : Dispatch<ActionTypes>) => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  fetch(`${baseUrl}users?q=${payload.text}`,
  {
    method : "GET",
  })
	.then(response => {
		return  response.json();
	})
	.then(result => {
		dispatch(searchUsers(result))
	})
	.catch(error => {
	console.error('Error:', error);
	});
}
}

export  function deleteUserAPI(payload: { id: string; }) {
	return(dispatch : Dispatch<any>) =>{ 
    
    fetch(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `${baseUrl}users/${payload.id}`,
      {
        method: "DELETE",
      }
    )
	.then(response => {
		console.log(response.json());

	})
	.then(result => {
	console.log('Success:', result);
	})
	.catch(error => {
	console.error('Error:', error);
	});

}
}
