import { initialState, characterReducer } from "./";

describe('Reducer Tests', () => {
  let state = null;

  test('adds character', () => {
    state = characterReducer(initialState, {}); // will this work?  may need empty action obj
    expect(state.name).toEqual('Sesame Street');

    state = characterReducer(state, {type: 'ADD', payload: 'test'});
    expect(state.characters.includes('test')).toBeTruthy();
  });
});
