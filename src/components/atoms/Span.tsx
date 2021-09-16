import React, { Component, MouseEvent, ReactNode } from 'react'
import styled from 'styled-components'


const SpanElement = styled.span`
   margin:4%;

   `

interface Props {
    children : ReactNode,
    onClick? : (e : MouseEvent) => void
}

class Span extends Component<Props> {
    

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render() {
        return (
            <SpanElement onClick={this.props.onClick}>
                {this.props.children}
            </SpanElement>
        )
    }
}

export default Span
