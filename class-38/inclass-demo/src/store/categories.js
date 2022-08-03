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
    
    default:
      return state;
  }
}


