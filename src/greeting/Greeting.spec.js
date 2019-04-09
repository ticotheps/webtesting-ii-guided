import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Greeting from './Greeting';

describe('<Greeting />', () => {
    it('renders No Message if message provided', () => {
        const { getByText } = render(<Greeting />);

        getByText(/no message/i);
    });

    it('renders the provided message', () => {
        const { getByText } = render(<Greeting msg="Hello Team" />);

        getByText(/hello team/i);
    });
});