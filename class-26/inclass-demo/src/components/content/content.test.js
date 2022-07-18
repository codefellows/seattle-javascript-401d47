import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Content from './';

describe('Testing the Content Component', () => {
  test('Renders header, h1, and button', () => {
    render(<Content greeting="Hello World!"/>);

    let header = screen.getByTestId('content-header');
    let button = screen.getByTestId('content-button');
    let h1 = screen.getByTestId('content-h1');

    expect(header).toBeTruthy();
    expect(button).toHaveTextContent('Change Title');
    expect(h1).toHaveTextContent('Hello World!');
    expect(h1).toBeInTheDocument();

  })
})
