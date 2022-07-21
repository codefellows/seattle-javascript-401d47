import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import {rest} from 'msw';
import {setupServer} from 'msw/node';

let server = setupServer(
  rest.get('*', (req, res, ctx) => {
    return res(
      ctx.json({
        headers: { contentType: 'application/json' },
        data: {results: ['test']},
      }),
    )
  })
);

beforeAll(() => {
  // Establish requests interception layer before all tests.
  server.listen();
});
afterAll(() => {
  // Clean up after all tests are done, preventing this
  // interception layer from affecting irrelevant tests.
  server.close();
});


test('renders learn react link', async () => {
  render(<App />);

  let inputEl = screen.getByTestId('url-input');
  fireEvent.change(inputEl, { target: { value: "http://fake.com" } });

  let submitBtn = screen.getByTestId('submit-button');
  fireEvent.click(submitBtn);

  let results = await screen.findByText(/test/); // some mock data to return from MSW
  console.log('results', results)
  expect(results).toBeInTheDocument();
});
