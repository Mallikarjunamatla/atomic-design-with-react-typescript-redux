import React, {  HTMLAttributes } from "react";

interface Props  extends HTMLAttributes<HTMLImageElement>{
  variant : string
}

class Logo extends React.Component<Props> {

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  render() {
    return <img {...this.props} src=""></img>;
  }
}

export default Logo;
