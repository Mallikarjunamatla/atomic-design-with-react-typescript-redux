/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { Component, HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLImageElement> {
  children: ReactNode;
  variant: string;
}

class Icon extends Component<Props> {
  render() {
    return (
      <>
        {this.props.variant === "edit" && (
          <img src="edit.svg" alt="" {...this.props} />
        )}
        {this.props.variant === "delete" && (
          <img src="delete.svg" alt="" {...this.props} />
        )}
      </>
    );
  }
}

export default Icon;
