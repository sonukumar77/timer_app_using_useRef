import "./styles.css";
import { Component } from "react";
import Counter from "./components/Counter";
import Netflix from "./components/Netflix";
import Timer from "./components/Timer";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        {/* <Counter /> */}
        {/* <Netflix /> */}
        <Timer />
      </div>
    );
  }
}

export default App;
