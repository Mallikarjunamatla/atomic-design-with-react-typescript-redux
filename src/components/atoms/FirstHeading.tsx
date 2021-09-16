import React, { Component, HTMLAttributes } from "react";
import styled from "styled-components";

const Heading = styled.h1`
  margin-left: 50%;
`;

export interface Props extends HTMLAttributes<HTMLHeadingElement> {
  message: string;
  variant: string;
}

class FirstHeading extends Component<Props> {
  state = {};

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <>
        {this.props.variant === "primary" && (
          <Heading>{this.props.message}</Heading>
        )}
      </>
    );
  }
}

export default FirstHeading;
