import axios from 'axios';

const initialState = [
  {
    normalizedName: 'electronics',
    displayName: 'Electronics',
    description: 'Tings that use electricity',
  },
  {
    normalizedName: 'tools',
    displayName: 'Tools',
    description: 'Things to tinker with',
  },
];

export default function categoriesReducer(state = initialState, action){
  switch(action.type){
    case 'GET_CATEGORIES':
      return action.payload.results
    default:
      return state;
  }
}

export const getCategories = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');

  dispatch(setCategories(response.data))
}

export const setCategories = (data) => {
  return {
    type: 'GET_CATEGORIES',
    payload: data
  }
}




