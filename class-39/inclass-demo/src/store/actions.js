export const vote = (candidate) => {
  return {
    type: 'INCREMENT',
    payload: candidate
  }
};

export const incrementCount = (candidate) => {
  // http request could here.  data (might be) parsed.

  // creators return actions {type, payload}
  return {
    type: 'INCREMENT',
    payload: candidate,
  }
};

export const decrementCount = (candidate) => {

  return{
    type: 'DECREMENT',
    payload: candidate,
  }
}

export const selectCategory = (category) => {
  return {
    type: 'SELECT_CATEGORY',
    payload: category,
  }
};

export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product,
  }
}

export const removeFromCart = (product) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: product,
  }
}
