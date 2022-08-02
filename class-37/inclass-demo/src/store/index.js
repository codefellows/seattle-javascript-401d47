import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import votesReducer from './votes';
import storeFrontReducer from './storefront';
import candidatesReducer from './candidates';

let reducers = combineReducers({
  votes: votesReducer,
  candidates: candidatesReducer,
  myStore: storeFrontReducer
});

export default function store(){
  return createStore(reducers, composeWithDevTools())
}
