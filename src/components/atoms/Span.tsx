import React, { Component, MouseEvent, ReactNode } from "react";
import styled from "styled-components";

const SpanElement = styled.span`
  width: 30%;
  margin-left: 3%;
  background-color: #adecad;
  margin-left: 2%;
  padding-left: 1%;
  padding-top: 0.5%;

  @media (max-width: 768px) {
    width: auto;
    margin-left: 1%;
  }
`;

interface Props {
  children: ReactNode;
  onClick?: (e: MouseEvent) => void;
}

class Span extends Component<Props> {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <SpanElement onClick={this.props.onClick}>
        {this.props.children}
      </SpanElement>
    );
  }
}

export default Span;
