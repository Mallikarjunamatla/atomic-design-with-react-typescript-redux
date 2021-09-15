import React, { Dispatch, ReactElement, ReactNode, useState } from 'react'
import User from "../../model/model"
import Ulist from '../atoms/UList'
import List from '../atoms/List'
import { connect } from 'react-redux'
import { getUsersAPI } from '../../action'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import styled from 'styled-components'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { AppState } from '../../store'



const u = styled.div`
    
`
const Users = styled.div`
     
`

const Actions = styled.div`
    display : flex;
    justify-content : space-around;
`

// interface Props {
//     children : ReactNode,
//     users : User[],
//     getUsers : () => User[],



interface IProps {
    getUsers: () => Promise<any>;
    users: User[],
    loading : boolean
  }

function AdminActions(props: IProps): ReactElement {

     const [fetch, setFetch] = useState<boolean>(false);

  const getUsers = (e : React.MouseEvent) =>{
    setFetch(true)
    e.preventDefault()
    console.log("HI")
    props.getUsers();
    console.log("Hello")

  }




    return (
      <>
<      h1>Admin UI</h1>
      <Actions>
       <Button onClick={getUsers} value="fetch" variant="primary"> </Button>
       <Input placeholder= "search user" variant="primary"></Input>
      </Actions>
    
      {props.users &&  
       <Users>
            <Ulist variant="unordered">
            {props.users.map((user) => <List variant="primary" key={user.id}><span>{user.name}</span></List>)}
            </Ulist>
        </Users>
       }

        </>
    )
}




const mapStateToProps = (state : AppState  ) => {
	return{
		loading: state.usersState.loading,
		users: state.usersState.users,
	
	}
	
};

const mapDispatchToProps = (dispatch : ThunkDispatch<any, any, AnyAction> ) => ({
	getUsers: () => dispatch(getUsersAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminActions);