const initialState = [
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
];

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return state.map(product => {
        if(product.name === action.payload.name){
          product.inventory = product.inventory - 1;
        }
        return product
      });
    case 'REMOVE_FROM_CART':
      return state.map(product => {
        if(product.name === action.payload.name){
          product.inventory = product.inventory + 1;
        }
        return product
      });
    default:
      return state;
  }
}

