import React from "react";
import ReactDOM from "react-dom";

interface AppProps {
  color: string;
}
class App extends React.Component<AppProps> {
  state = { counter: 0 };

  onIncrement = (): void => {
    console.log("increase" + this.state.counter);

    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    console.log("decrease" + this.state.counter);

    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    );
  }
}

ReactDOM.render(<App color="purple" />, document.querySelector("#root"));
