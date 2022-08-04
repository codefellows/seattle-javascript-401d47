import { waitFor } from "@testing-library/react";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import categoriesSlice, { getCategories } from "../store/categories.slice";


describe('Category Slice Tests', () => {
  let { set } = categoriesSlice.actions;

  const reducer = combineReducers({
    categories: categoriesSlice.reducer,
  });

  const store = configureStore({ reducer });

  test('can get categories', () => {
    store.dispatch(set({ results: ['test'] }));

    let state = store.getState();
    expect(state.categories.categories.results[0]).toEqual('test');
  });

  test('fetch categories', async () => {
    await waitFor(() => store.dispatch(getCategories()));

    let { categories } = store.getState();
    console.log('should we be concerned', categories.categories.results);
    expect(categories.categories.results.length).toBeTruthy();
  })

})
