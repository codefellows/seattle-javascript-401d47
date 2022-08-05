import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./category.slice";
import todoReducer from "./todos";

export default function createStore(){
  return configureStore({
    reducer: {
      categories: categorySlice.reducer,
      todos: todoReducer,
    }
  });
}
