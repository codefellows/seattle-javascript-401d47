import axios from 'axios';

const initialState = {
  count: 1,
  results: [{
    complete: false,
    text: 'Do Laundry',
    difficulty: 2,
    assignee: 'Ryan',
  }],
}

export default function todosReducer (state = initialState, action){
  switch(action.type){
    case 'GET_TODOS':
      return action.payload
    default:
      return state;
  }
}

export const getTodos = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/todo');

  dispatch(setTodos(response.data))
}

export const setTodos = (data) => {
  return {
    type: 'GET_TODOS',
    payload: data
  }
}
