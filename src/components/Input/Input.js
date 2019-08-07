import React from "react";

import "./Input.css";

class Input extends React.Component {
  render() {
    return (
      <input type={this.props.type} placeholder={this.props.placeholder} />
    );
  }
}

export default Input;
