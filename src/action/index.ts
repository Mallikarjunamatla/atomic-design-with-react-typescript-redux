import User from "../model/model";
import { SET_LOADING_STATUS, GET_USERS, PostActionTypes } from "./actionType";
import { Dispatch } from "redux";
 const baseUrl  = process.env.REACT_APP_API_BASE_URL

export const setLoading = (status: boolean): PostActionTypes => {
  return {
    type: SET_LOADING_STATUS,
    status: status,
  };
};
export const getUsersAction = (users: User[]): PostActionTypes => {
  console.log("GetUSEACTION");
  return {
    type: GET_USERS,
    payload: users,
  };
};
// export const getUsers(payload : User[]):PostActionTypes => {
// 	return {
// 		type: GET_USERS,
// 		payload: payload,

// 	};
// }

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function getUsersAPI() {
  console.log("GetUSERAPI");
  return (dispatch: Dispatch<PostActionTypes>) =>
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
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
        console.log("ERROR");
      });
}

// export function updateArticleAPI(payload) {
// 	return(dispatch) => fetch(baseUrl+"users",)
// 	.then(response => {
// 		const data =  response.json();
// 		dispatch(getUsers(data))

// 	})
// 	.then(result => {
// 	console.log('Success:', result);
// 	})
// 	.catch(error => {
// 	console.error('Error:', error);
// 	});
// }

// export function deleteUserAPI(payload: { id: string; }) {
// 	return(dispatch : Dispatch<PostActionTypes>) => fetch(`${baseUrl}/users/${payload.id}`,{
// 		method : "DELETE",
// 	})
// 	.then(response => {
// 		console.log(response.json());

// 	})
// 	.then(result => {
// 	console.log('Success:', result);
// 	})
// 	.catch(error => {
// 	console.error('Error:', error);
// 	});

// }
