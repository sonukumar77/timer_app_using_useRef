import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increaseCounter = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  decreaseCounter = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
  };

  render() {
    return (
      <div style={{ margin: " auto 8rem", textAlign: "center" }}>
        <h1>Counter App</h1>
        <button onClick={this.increaseCounter} style={{ marginTop: "1rem" }}>
          Increment
        </button>
        <p style={{ marginTop: "2rem" }}>{this.state.count}</p>
        <button onClick={this.decreaseCounter} style={{ marginTop: "1rem" }}>
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
