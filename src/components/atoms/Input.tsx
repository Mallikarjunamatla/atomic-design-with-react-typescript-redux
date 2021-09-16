import React, { Component, HTMLAttributes } from "react";
import styled from "styled-components";

const InputPrimary = styled.input`
  width: 40%;
  height: 20%;
  border-radius: 5px;
`;

const InputSubmission = styled.input.attrs({ type: "checkbox" })`
  width: 25px;
  height: 25px;
  border-radius: 5px;
`;

export interface Props extends HTMLAttributes<HTMLInputElement> {
  variant: string;
  placeholder: string;
  disabled?: boolean;
}


class Input extends Component<Props> {
  

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <>
        {this.props.variant === "primary" && (
          <InputPrimary {...this.props}>{this.props.children}</InputPrimary>
        )}

        {this.props.variant === "secondary" && (
          <InputPrimary {...this.props}>{this.props.children}</InputPrimary>
        )}

        {this.props.variant === "search" && (
          <InputPrimary {...this.props}>{this.props.children}</InputPrimary>
        )}

        {this.props.variant === "enter" && (
          <InputPrimary {...this.props}>{this.props.children}</InputPrimary>
        )}

        {this.props.variant === "checkbox" && (
          <InputSubmission {...this.props}>
            {this.props.children}
          </InputSubmission>
        )}
      </>
    );
  }
}

export default Input;
