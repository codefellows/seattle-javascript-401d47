const initialState = {
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
  ],
  products: [
    {
      name: 'walkman',
      category: 'electronics',
      description: 'if you know you know',
      price: 10,
      inventory: 42,
    },
    {
      name: 'hammer',
      category: 'tools',
      description: 'if every tool is a hammer....',
      price: 20,
      inventory: 37,
    }
  ],
};

// reducer function

function storeFrontReducer (state = initialState, action) {

  console.log(action);
    switch(action.type){

      case 'SELECT_CATEGORY':
        return {...state, activeCategory: action.payload};

      default: 
        return state;
    }
}

// action creator
export const selectCategory = (category) => {
  return {
    type: 'SELECT_CATEGORY',
    payload: category,
  }
};

//  possibly I could filter state results


export default storeFrontReducer;
