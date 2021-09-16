import { Component, HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

const UnorderedList = styled.ul`
  width: 80%;
  height: 20%;
`;

export interface Props extends HTMLAttributes<HTMLUListElement> {
  variant: string;
  children: ReactNode;
}

class Ulist extends Component<Props> {
  state = {};

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <>
        {this.props.variant === "unordered" && (
          <UnorderedList {...this.props}>{this.props.children}</UnorderedList>
        )}
      </>
    );
  }
}

export default Ulist;
