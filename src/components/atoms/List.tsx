import React, { Component, ReactNode } from "react";
import styled from "styled-components";

const ListElement = styled.li`
  display: flex;
  height: 40px;
  background-color: #0203054e;
  border: 0.5px solid black;
  word-wrap: break-word;
  list-style: none;
  justify-content: space-around;
  border-radius: 3%;
  color: black;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: fit-content;
  }
`;

export interface Props {
  children: ReactNode;
  variant: string;
}

class List extends Component<Props> {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <>
        {this.props.variant === "primary" && (
          <ListElement {...this.props}>{this.props.children}</ListElement>
        )}
      </>
    );
  }
}

export default List;
