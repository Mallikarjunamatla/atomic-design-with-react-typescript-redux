import React, {ReactElement,useState } from "react";
import User from "../../../model/model";
import Ulist from "../../atoms/UList";
import List from "../../atoms/List";
import FirstHeading from "../../atoms/FirstHeading";
import { connect } from "react-redux";
import { getUsersAPI } from "../../../action";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import styled from "styled-components";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { AppState } from "../../../store";
import Span from "../../atoms/Span";


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

interface IProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getUsers: () => Promise<any>;
  users: User[];
  loading: boolean;
}

function AdminActions(props: IProps): ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [fetch, setFetch] = useState<boolean>(false);

  const getUsers = async (e: React.MouseEvent) => {
    setFetch(true);
    e.preventDefault();
    console.log("HI");
    await props.getUsers();

    console.log("Hello");
  };

  return (
    <>
      <FirstHeading message="Admin UI" variant="primary">Admin UI</FirstHeading>
      <Actions>
        <Button data-testid="fetch-users" onClick={getUsers} value="fetch" variant="primary">
          {" "}
        </Button>
        <Input  data-testid="search-users" placeholder="search user" variant="primary"></Input>
      </Actions>

      {props.users && (
        <Users>
          <Ulist variant="unordered">
            {props.users.map((user) => (
              <List variant="primary" key={user.id}>
                 <Span >{user.id}</Span>
                <Span >{user.name}</Span>
                <Span >{user.email}</Span>
               
              </List>
            ))}
          </Ulist>
        </Users>
      )}
    </>
  );
}

const mapStateToProps = (state: AppState)=> {
  return {
    loading: state.usersState.loading,
    users: state.usersState.users,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  getUsers: () => dispatch(getUsersAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminActions);
