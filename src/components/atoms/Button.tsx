import React, { Component, HTMLAttributes } from "react";
import styled from "styled-components";

const PrimaryButton = styled.button`
  width: 70px;
  height: 30px;
  color: red;
`;

const SecondaryButton = styled.button`
  width: 100px;
  height: 30px;
  color: #11130b;
  background-color: yellow;
  padding-bottom: 2%;
  padding-top: 1%;
  border-radius: 5%;
  align-items: center;
  border-radius: 10%;
  @media (max-width: 769px) {
    padding: 0;
  }
`;

const LoginButton = styled.button`
  width: 100px;
  height: 30px;
  color: #fff;
  background-color: #4c00ff;
  padding-bottom: 2%;
  padding-top: 1%;
  border-radius: 5%;
  align-items: center;
  border-radius: 100%;
  font-weight: 700;
  @media (max-width: 769px) {
    padding: 0;
  }
`;

const SubmitButton = styled.button`
  width: 100px;
  height: 30px;
  color: #1fa2ca;
  background-color: #0b041d;
  padding-bottom: 2%;
  padding-top: 1%;
  border-radius: 5%;
  align-items: center;
  border-radius: 10%;
  font-weight: 700;
  @media (max-width: 769px) {
    padding: 0;
  }
`;

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  variant: string;
  value: string;
}


class Button extends Component<Props> {
 

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return (
      <>
        {this.props.variant === "primary" && (
          <PrimaryButton {...this.props}>{this.props.value}</PrimaryButton>
        )}

        {this.props.variant === "secondary" && (
          <SecondaryButton {...this.props}>
            {this.props.children}
            Secondary
          </SecondaryButton>
        )}

        {this.props.variant === "login" && (
          <LoginButton {...this.props}>
            {this.props.children}
            Login
          </LoginButton>
        )}

        {this.props.variant === "submit" && (
          <SubmitButton {...this.props}>
            {this.props.children}
            Submit
          </SubmitButton>
        )}
      </>
    );
  }
}

export default Button;
