const initialState = '';

export default function activeCategoryReducer (state = initialState, action) {

  // console.log(action);
    switch(action.type){

      case 'SELECT_CATEGORY':
        return action.payload;

      default: 
        return state;
    }
}
