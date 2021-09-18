/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { Component, HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLImageElement> {
  children?: ReactNode;
  variant: string;
}

class Icon extends Component<Props> {
  render() {
    return (
      <>
        {this.props.variant === "edit" && (
          <img
            style={{ width: "25px", padding: "1%" }}
            src="edit.svg"
            alt=""
            {...this.props}
          />
        )}
        {this.props.variant === "delete" && (
          <img
            style={{ width: "25px" }}
            src="delete.svg"
            alt=""
            {...this.props}
          />
        )}
      </>
    );
  }
}

export default Icon;
