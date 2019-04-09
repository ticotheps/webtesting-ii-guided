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
  const helpers = render(<App />);
  console.log('helpers', helpers);
});
