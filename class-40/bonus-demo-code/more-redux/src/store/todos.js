import { createAction, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const ADD_TODO = 'ADD_TODO';
const SET_TODOS = 'SET_TODOS';

// creating actions
export const addTodo = createAction(ADD_TODO);
export const setTodos = createAction(SET_TODOS);

export const getTodos = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/todo');
  dispatch(setTodos(response.data.results))
}

// create reducer
const todoReducer = createReducer({
  list: [],
}, {
  [ADD_TODO]: (state, action) => {
    // console.log('this worked', action.payload)

    return {
    list: [...state.list, action.payload]
  }},
  [SET_TODOS]: (state, action) => ({
    list: action.payload,
  })
});


export default todoReducer;
