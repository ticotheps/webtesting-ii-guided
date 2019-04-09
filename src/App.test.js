import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import App from './App';

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

  const { getByText } = render(<App />); 
  
  getByText('Hello World');
});
