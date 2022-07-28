import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SettingsProvider, { SettingsContext } from './';


describe('Settings Context', () => {

  // unit test: proves ONLY that the state can provide info to its consumers
  test('renders initial state as a list', () => {
    render(
      <SettingsProvider>
        <SettingsContext.Consumer>
          {({ completed, pageItems, sort }) => (
            <>
            <h1>SettingsProvider Initial State</h1>
            <ul>
              <li data-testid="completed">{completed.toString()}</li>
              <li data-testid="pageItems">{pageItems}</li>
              <li data-testid="sort">{sort}</li>
            </ul>
            </>
          )}
        </SettingsContext.Consumer>
      </SettingsProvider>
    );

    const completedLi = screen.getByTestId('completed');
    const pageItemsLi = screen.getByTestId('pageItems');
    const sortLi = screen.getByTestId('sort');


    expect(completedLi).toHaveTextContent(false);
    expect(pageItemsLi).toHaveTextContent(3);
    expect(sortLi).toHaveTextContent('difficulty');
  });
});
