import { useEffect, useState } from 'react';
import Content from './Content';
import List from './List';

import axios from 'axios';
import './App.css';

function App() {

  const [name, setName] = useState('World');
  const [showContent, setShowContent] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  const [showPokemon, setShowPokemon] = useState(false);


  // greedy use effect.  runs EVeRY time an event occurs
  useEffect(() => {
    // if running any kind of mutation, that would be seen as an event and this becomes RECURSIVE
    console.log('An event occurred!');
  });

  // NOT greedy just add an array as a second param, just happens "ONCE"
  useEffect(() => {

    // this is great for an initial API call to populate some initial data
    console.log('something happens "once" when mounted!')

    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.data.results.map(pokemon => pokemon.name))
      .then(names => setPokemon(names)); // very important to set state IN the async/promise
  }, []);

  // update happens, we need to rerender?  
  useEffect(() => {
    // if an update needs to happen, we can focus on the thing that needs updating, in this case "name"
    console.log('name was updated!');
  }, [name]);



  return (
    <>
      <h1 onClick={() => setName('You')}>Hello {name}</h1>
      <button onClick={() => setName('World!!!')}>Return "Hello World"</button>
      <button onClick={() => setShowContent(!showContent)}>Show Content</button>
      <button data-testid="poke-button" onClick={() => setShowPokemon(!showPokemon)}>Show Pokemon</button>

      {/* conditional rendering, either works */}
      {showContent && <Content />}
      {/* {showContent ? <Content /> : ''} */}

      {showPokemon && <List list={pokemon} />}

    </>
  );
}

export default App;
