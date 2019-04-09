import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders successfully', () => {
    render(<App />);
  });
  
  it('renders Hello World', () => {
    // const helpers = render(<App />); 
    // the render method returns an object that gives you methods to help you find things in the DOM.
    // console.log('helpers', helpers);
  
    const { getByText, queryByText, debug } = render(<App />); 
    
    // getByText(/hello World/i);
    expect(queryByText(/hello world/i)).not.toBeNull();
  });
  
  // The DIFFERENCE between 'getByText' and 'queryByText':
  // 'getByText' can be used to check the presence of an element on the DOM and throws an error if the test fails.
  // 'queryByText' can be used to do the same thing, but returns null if the test fails.

  it('greets the team', () => {
    const { getByText } = render(<App />);

    const button = getByText(/greet/i);

    fireEvent.click(button);
    getByText(/hello web xvii/i);
  });
});

