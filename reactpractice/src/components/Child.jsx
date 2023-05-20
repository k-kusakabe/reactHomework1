import React, { Component } from "react";

class Child extends Component {
  state = {};
  render() {
    return <h1>My name is {this.props.name}</h1>;
  }
}

export default Child;
