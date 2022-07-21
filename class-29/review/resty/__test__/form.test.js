import { render, screen, fireEvent } from '@testing-library/react';
import Form from './';


describe('testing our form component', () => {

  test('Updates values on submit', () => {

    const handleValues = jest.fn();

    render(<Form handleApiCall={handleValues}/>);

    // be sure to add data-testid to the input element
    let inputEl = screen.getByTestId('url-input');
    fireEvent.change(inputEl, {target: { value: "test value"}});

    // this tests that the GET box has been clicked
    // be sure to add data-testid to the correct span
    let getSpan = screen.getByTestId('get-span');
    fireEvent.click(getSpan);

    // be sure to add data-testid to the submit button
    let submitBtn = screen.getByTestId('submit-button');
    fireEvent.click(submitBtn);

    // our mock function is called with the expected params because of the code in the form component
    expect(handleValues).toHaveBeenCalledWith({ method: 'GET', url: 'test value' });
  });
});
