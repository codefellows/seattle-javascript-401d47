// import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension';
// can totally use redux-thunk:  just import the package and use SAME way
// import thunk from 'redux-thunk';
// import thunk from './middleware/thunk';

import { configureStore, combineReducers } from '@reduxjs/toolkit';

import votesReducer from './votes';
import candidatesReducer from './candidates';
import productsReducer from './products';
import categoriesReducer from './categories';
import activeCategoryReducer from './active-category';
import cartReducer from './cart';
import todosReducer from './todos';
import categoriesSlice from './categories.slice';


let reducer = combineReducers({
  // votes: votesReducer,
  // candidates: candidatesReducer,
  // products: productsReducer,
  categories: categoriesSlice.reducer,
  // activeCategory: activeCategoryReducer,
  // cart: cartReducer,
  // todos: todosReducer,
});

// export default function store(){
//   return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
// }

export default function store(){
  return configureStore({reducer});
}
