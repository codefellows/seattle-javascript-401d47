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
