import { useReducer, useState } from "react";

export const initialState = {
  name: 'Sesame Street',
  characters: ['Big Bird', 'Mr Aloysius Snuffleupagus', 'Elmo'],
}

export const characterReducer = (state, action) => {
  // action example:  {type: 'ADD', payload: 'character name'}

  switch (action.type) {
    case 'ADD':
      return { ...state, characters: [...state.characters, action.payload] };

    case 'REMOVE':
      return { ...state, characters: state.characters.filter(char => char !== action.payload) }

    default:
      return state
  }

}

const Characters = () => {

  let [state, dispatch] = useReducer(characterReducer, initialState);

  // character will be saved as input to add or remove
  let [input, setInput] = useState('');

  // proof our reducer is working
  // console.log(state);

  const addCharacter = () => {
    dispatch({type: 'ADD', payload: input})
  }

  const removeCharacter = () => {
    dispatch({type: 'REMOVE', payload: input})
  }


  return (
    <>
      <h1>{state.name} Characters</h1>
      <input onChange={(e) => setInput(e.target.value)} />
      <button onClick={addCharacter}>Add Character</button>
      <button onClick={removeCharacter}>Remove Character</button>

      <ul>
        {state.characters.map((name, index) => <li key={`char-${index}`}>{name}</li>)}
      </ul>

    </>
  )
};

export default Characters;
