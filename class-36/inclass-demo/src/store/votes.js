const initialState = {
  candidates: [
    {name: 'Peter', votes: 0},
    {name: 'Paul', votes: 0},
    {name: 'Mary', votes: 0}
  ],
  totalVotes: 0,
};

function votesReducer(state = initialState, action) {
  switch(action.type){
    case 'INCREMENT':
      return {
        ...state,
        candidates: state.candidates.map(candidate => {
          if(candidate.name === action.payload.name){
            return {
              name: candidate.name, 
              votes: candidate.votes + 1 
            }
          }
          return candidate
        }),
        totalVotes: state.totalVotes + 1,
      }
    default:
      return state
  }
}

// we are going to do something.  
//  - what are we going to do?
//  - what data do we require to do the thing?
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

export const reset = () => {

  return {type: 'RESET'}
}

export default votesReducer;

