import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // Initialize the state with the number passed via props, or default to 0 if not provided
    this.state = {
      number: props.initialNumber || 0,
    };
  }

  // Increment the number by 1
  increment = () => {
    this.setState((prevState) => ({
      number: prevState.number + 1,
    }));
  };

  // Decrement the number by 1
  decrement = () => {
    this.setState((prevState) => ({
      number: prevState.number - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.number}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
