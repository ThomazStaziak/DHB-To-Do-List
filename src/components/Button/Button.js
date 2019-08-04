import React, { Component } from "react";

import "./Button.css";

class Button extends Component {
  render() {
    return (
      <button
        type={this.props.type}
        className={this.props.className}
        onClick={this.props.onClick}
      >
        {this.props.title}
      </button>
    );
  }
}

export default Button;
