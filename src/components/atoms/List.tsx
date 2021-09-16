import React, { Component, ReactNode } from "react";
import styled from "styled-components";

const ListElement = styled.li`
  width: 80%;
  height: 4%;
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
