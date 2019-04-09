import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    greeting: 'No greeting for you',
  };

  render() {
    return (
      <div className="App">
        <h2>Hello World</h2>
        <button onClick={this.greet}>Greet</button>
        <button onClick={this.bye}>Bye</button>
        <div>{this.state.greeting}</div>
      </div>
    );
  }

  greet = () => {
    this.setState({ greeting: 'Hello Web XVII' });
  };

  bye = () => {
    this.setState({ greeting: 'Bye Web XVII' });
  };
}

export default App;
