import { Component, HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'
import Input from '../atoms/Input'



const SearchForm = styled.form`
    width : 80%;
    height : 20%;
    
`

export interface Props extends HTMLAttributes<HTMLFormElement> {
    
    variant : string,
    children : ReactNode
    
}
interface State {
    
}

export  class Form extends Component<Props, State> {
    state = {}

    render() {
        return (
           <>
             <SearchForm>
             <Input   placeholder="search user"   variant="search" >
                 {this.props.children}
            </Input>

             </SearchForm>
               
                   

           </>
        )
    }
}
