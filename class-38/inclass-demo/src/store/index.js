import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
// can totally use redux-thunk:  just import the package and use SAME way
// import thunk from 'redux-thunk';
import thunk from './middleware/thunk';

import votesReducer from './votes';
import candidatesReducer from './candidates';
import productsReducer from './products';
import categoriesReducer from './categories';
import activeCategoryReducer from './active-category';
import cartReducer from './cart';
import todosReducer from './todos';

let reducers = combineReducers({
  votes: votesReducer,
  candidates: candidatesReducer,
  products: productsReducer,
  categories: categoriesReducer,
  activeCategory: activeCategoryReducer,
  cart: cartReducer,
  todos: todosReducer,
});

export default function store(){
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}
