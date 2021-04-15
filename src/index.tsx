import React from "react";
import ReactDOM from "react-dom";

interface AppProps {
  color: string;
}
// interface AppState {
//     counter: number
// }
class App extends React.Component<AppProps> {
  constructor(props: AppProps) {
    super(props);

    this.state = { counter: 0 };
  }
  /*
  //state = { counter: 0 }; defineing properites here and in the constructor is not the smae
  in ts as it in in JS
  so you have to chose between initializing the property way of initialising a state object
  or chose the constructor way of initializing a state <object data. In JS we dont have to worry abou this" type="" className=""></object>
*/

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
