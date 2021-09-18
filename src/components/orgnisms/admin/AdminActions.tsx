/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { ReactElement, useState } from "react";
import User from "../../../model/model";
import Ulist from "../../atoms/UList";
import List from "../../atoms/List";
import FirstHeading from "../../atoms/FirstHeading";
import { connect } from "react-redux";
import { deleteUserAPI, getUsersAPI, searchUsersAPI } from "../../../action";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import styled from "styled-components";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { AppState } from "../../../store";
import Span from "../../atoms/Span";
import Icon from "../../atoms/Icon";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const u = styled.div``;
const Users = styled.div``;

const Actions = styled.div`
  display: flex;
  justify-content: space-around;
`;

// interface Props {
//     children : ReactNode,
//     users : User[],
//     getUsers : () => User[],

// interface IProps  any {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   getUsers: () => Promise<any>,
//   searchUsers : (payload : any) => Promise<any>,
//   deleteUser : (payload : any) => Promise<any>,
//   search : User[],
//   users: User[];

// }

function AdminActions(props: any): ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [fetch, setFetch] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async (e: React.MouseEvent) => {
    setFetch(true);
    e.preventDefault();
    console.log("HI");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    await props.getUsers();
    setUsers(props.users);

    console.log("Hello");
  };

  const searchUsers = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setFetch(true);
    e.preventDefault();
    console.log("HI");
    if (e.target.value.trim().length !== 0) {
      await props.searchUsers();
      setUsers(props.search);
    }
  };

  //   const deleteUser =  ( e : React.MouseEvent, id:string) => {
  //     e.preventDefault()
  //     const yes =  window.confirm("Do yo want to delete user permentently?")

  //     if(yes){

  //       const itemsArray = [...users];
  //       const index = itemsArray.findIndex(item => item.id === id);
  //      props.deleteUser(index)

  //     }

  // }

  const deleteUser = (id: string) => {
    // // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    // // if(window.confirm("????")){
    //   void props.deleteUser(id);

    //  console.log(id)
    // props.deleteUser(id)
    // .catch((err: any) => console.log(err))
    // .then(() => console.log('this will succeed'))
    // .catch(() => 'obligatory catch')
    props.deleteUser(id);
  };

  return (
    <>
      <FirstHeading message="Admin UI" variant="primary">
        Admin UI
      </FirstHeading>
      <Actions>
        <Button
          data-testid="fetch-users"
          onClick={getUsers}
          value="fetch"
          variant="primary"
        >
          {" "}
        </Button>
        <Input
          data-testid="search-users"
          placeholder="search user"
          variant="primary"
          onChange={searchUsers}
        ></Input>
      </Actions>

      {users && (
        <Users>
          <Ulist variant="unordered">
            {props.users.map((user: any) => (
              <List variant="primary" key={user.id}>
                <Span>{user.name}</Span>
                <Span>{user.email}</Span>
                <Span>{user.role}</Span>
                <Icon variant="edit"></Icon>

                <span
                  onClick={(e) => {
                    e.preventDefault();
                    void deleteUser(user.id);
                  }}
                >
                  <Icon variant="delete"></Icon>
                </span>
              </List>
            ))}
          </Ulist>
        </Users>
      )}
    </>
  );
}

const mapStateToProps = (state: {
  usersDataReducer: { users: any; search: any };
}) => {
  return {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    users: state.usersDataReducer.users,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    search: state.usersDataReducer.search,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  getUsers: () => dispatch(getUsersAPI()),
  searchUsers: (payload: any) => dispatch(searchUsersAPI(payload)),
  deleteUser: (payload: { id: string }) => dispatch(deleteUserAPI(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminActions);
