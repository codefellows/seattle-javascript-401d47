import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    activeCategory: '',
    categories: [
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
    ]
  },
  reducers: {
    set(state, action){
      console.log('set reducer action', action);
      return {...state, categories: {...action.payload}}
    },
    activateCategory(state, action){
      return {
        categories: state.categories,
        activeCategory: action.payload,
      }
    }
  }
});

// what is on (or contained within) the slice?  
// given to us by the createSlice method
// categoriesSlice.reducer
// categoriesSlice.actions.set
// categoriesSlice.actions.activate

export const getCategories = () => async (dispatch, getState) => {
  const { set } = categoriesSlice.actions;
  try {
    let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
    dispatch(set(response.data));
  } catch (e) {
    console.log('getCategory error', e);
  }
}

export default categoriesSlice;
