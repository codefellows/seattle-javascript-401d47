import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import PeopleProvider, { PeopleContext } from './';

describe('People Context', () => {
  test('should render the list of people on page load', () => {
    render(
      <PeopleProvider>
        <PeopleContext.Consumer>
          {({ list }) => (
            <p>{list[0].name}</p>
          )}
        </PeopleContext.Consumer>
      </PeopleProvider>
    );

    const p = screen.getByText(/ryan/i)
    expect(p).toBeInTheDocument();
  });

  test('should render the last person added', () => {
    render(
      <PeopleProvider>
        <PeopleContext.Consumer>
          {({ list, addPerson }) => (
            <>
              <button
                data-testid="add-button"
                onClick={() => addPerson({
                  name: 'test',
                  age: 39
                })}
              >OK</button>
              <p>{list[list.length - 1].name}</p>
            </>
          )}
        </PeopleContext.Consumer>
      </PeopleProvider>
    );
    const button = screen.getByTestId('add-button');
    fireEvent.click(button);

    const lastPerson = screen.getByText(/test/i)
    expect(lastPerson).toBeInTheDocument();
  });
})
