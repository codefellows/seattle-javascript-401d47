import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import Counter from './';

describe('Counter Tests',  () => {
  test('Can count', () => {
    render(<Counter />);

    // showing this as an alternative
    const button = screen.getByText('Update Clicks');

    // getting by testid from DOM like usual
    const counter = screen.getByTestId('counter');
    const factor = screen.getByTestId('factor');

    // mocking button click ONCE
    fireEvent.click(button);

    // the actual test evaluation
    expect(counter).toHaveTextContent(1);
    expect(factor).toHaveTextContent('false');
  });

  test('Can count and accommodate factor of five', () => {
    render(<Counter />);

    // showing this as an alternative
    const button = screen.getByText('Update Clicks');

    // getting by testid from DOM like usual
    const counter = screen.getByTestId('counter');
    const factor = screen.getByTestId('factor');

    expect(counter).toHaveTextContent(0);
    expect(factor).toHaveTextContent('false');
    for (let i = 1; i < 42; i++){
      fireEvent.click(button);
      expect(counter).toHaveTextContent(`Button has been clicked ${i} time(s)`);
      let expectedValue = i % 5 ? false : true;
      expect(factor).toHaveTextContent(expectedValue);
    }
  });
});
