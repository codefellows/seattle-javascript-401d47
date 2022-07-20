import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import App from './App';

const server = setupServer(
  rest.get('*', (req, res, ctx) => {
    return res(ctx.json({results: [{name: 'PokeOne'}, {name: 'PokeTwo'}]}));
  }),
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('MSW test', async () => {
  render(<App />);

  let pokeButton = screen.getByTestId('poke-button');
  fireEvent.click(pokeButton);

  let liOne = await screen.findByText('PokeOne');
  let liTwo = await screen.findByText('PokeTwo');

  expect(liOne).toBeInTheDocument();
  expect(liTwo).toBeInTheDocument();

});
