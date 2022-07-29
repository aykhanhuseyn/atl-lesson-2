import React, { Component } from "react";

// named export
export class MyClass extends Component {
  state = {};

  constructor() {
    console.log("constructor");
    super();
    this.state.count = 0;
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps", { props, state });
  }

  componentDidMount() {
    console.log("componentDidMount");

    document.getElementById("root").addEventListener("click", console.log);
  }

  shouldComponentUpdate(props, state) {
    console.log("shouldComponentUpdate", { props, state });

    // return props.classProp !== this.props.classProp;
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    document.getElementById("root").removeEventListener("click", console.log);
    console.log("unmounting");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>MyClass</h1>
        <h1>count: {this.state.count}</h1>
      </div>
    );
  }
}
