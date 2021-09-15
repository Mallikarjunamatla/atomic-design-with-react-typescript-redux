import React, { Component, HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'






const InputPrimary = styled.input`
   width : 40%;
   height: 20%;
   border-radius: 5px;

`

const InputSubmission = styled.input.attrs({ type: 'checkbox' })`
   width : 25px;
   height: 25px;
   border-radius: 5px;

`



export interface Props extends HTMLAttributes<HTMLInputElement> {

    variant : string,
    placeholder : string,
    disabled? : boolean
}
interface State {
    
}

  class Input extends Component<Props, State> {
    state = {}

    render() {
        return (
           <>
           { this.props.variant === "primary" && 
            <InputPrimary {...this.props}>
                 {this.props.children}
            </InputPrimary>
            }

            { this.props.variant === "secondary" && 
            <InputPrimary {...this.props}>
                 {this.props.children}
            </InputPrimary>
            }


            { this.props.variant === "search" && 
            <InputPrimary {...this.props}>
                 {this.props.children}
            </InputPrimary>
            }


            { this.props.variant === "enter" && 
            <InputPrimary {...this.props}>
                 {this.props.children}
            </InputPrimary>
            }


            { this.props.variant === "checkbox" && 
            <InputSubmission {...this.props}>
                {this.props.children}
            </InputSubmission>
            }




            </>
        )
    }
}

export default Input
