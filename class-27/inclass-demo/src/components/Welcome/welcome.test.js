import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import Welcome from './';

describe('Welcome Tests',  () => {
  test('Loads and displays the starting data', async () => {
    render(<Welcome />);
    // find by allows for asynchronous action aka state loading
    const name = await screen.findByTestId('name');
    expect(name).toHaveTextContent('Welcome World');
  });

  test('Can change name', async () => {
    render(<Welcome />);

    // getting the elements from the DOM
    const input = screen.getByTestId('name-input');
    const name = screen.getByTestId('name');

    // mocking an event:  change of input
    fireEvent.change(input, {target: {value: 'Ryan'}});

    // the test evaluation
    expect(name).toHaveTextContent('Welcome Ryan');
  })
})
