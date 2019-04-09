import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    greeting: 'No greeting for you',
  };

  render() {
    return (
      <div className="App">
        <h2>Hello World</h2>
      </div>
    );
  }

  greet = () => {
    this.setState({ greeting: 'Hello Web XVII' });
  };
}

export default App;
