import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    list: [
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
      return {...state, list: action.payload}
    },
  }
});

export const getCategories = () => async (dispatch, getState) => {
  const { set } = categorySlice.actions;
  try{
    let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
    dispatch(set(response.data.results))
  } catch(e){
    console.log('getCategories error', e)
  }
}

export default categorySlice;
