import React, { Component } from "react";

import "./Task.css";

class Task extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <span>{this.props.title}</span>
        <span>{this.props.date}</span>
        <span
          className={this.props.statusClassName}
          onClick={this.props.statusClick}
        >
          {this.props.status}
        </span>
      </div>
    );
  }
}

export default Task;
