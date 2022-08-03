import '@testing-library/jest-dom';
import votesReducer from '../store/votes';
import candidatesReducer from '../store/candidates';
import {legacy_createStore as createStore, combineReducers } from 'redux';

import { vote } from '../store/actions';

describe('Voting Redux Tests', () => {
  const reducers = combineReducers({
    votes: votesReducer,
    candidates: candidatesReducer,
  })

  const store = createStore(reducers);

  test('Store should have a vote total and a list of candidates', () => {

    const state = store.getState();
    expect(state.votes.totalVotes).toEqual(0);
  })

  test('increment total votes and vote for a candidate', () => {
    let { candidates } = store.getState();
    store.dispatch(vote(candidates[0]));

    let state = store.getState();
    expect(state.votes.totalVotes).toEqual(1);
    expect(state.candidates[0].votes).toEqual(1);
  })
})

