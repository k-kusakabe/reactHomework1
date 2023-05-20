import React, { Component } from "react";
import Child from "./components/Child";

class App extends Component {
  state = { names: ["Bob", "John", "Mike", "Sam"], currentIndex: 0 };

  changeName = () => {
    const { names, currentIndex } = this.state;
    const nextIndex = (currentIndex + 1) % names.length;
    this.setState({ currentIndex: nextIndex });
  };

  render() {
    const { names, currentIndex } = this.state;
    const currentName = names[currentIndex];

    return (
      <>
        <Child name={currentName} />
        <button onClick={this.changeName}>Change Name</button>
      </>
    );
  }
}

export default App;
