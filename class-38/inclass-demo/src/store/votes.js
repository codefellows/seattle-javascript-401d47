const initialState = {
  totalVotes: 0,
};

function votesReducer(state = initialState, action) {
  let {type } = action
  switch(type){
    case 'INCREMENT':
      return {
        totalVotes: state.totalVotes + 1,
      }

    case 'RESET':
      return initialState;

    default:
      return state
  }
}

// we are going to do something.  
//  - what are we going to do?
//  - what data do we require to do the thing?


export const reset = () => {

  return {type: 'RESET'}
}

export default votesReducer;

