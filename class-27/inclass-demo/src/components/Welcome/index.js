import { useState } from "react";

const Welcome = () => {

  // setting up some state!  NO NEED for a constructor!  this isn't a class!
  // to bring in state, we'll use the "useState Hook"
  // what is a hook?  function
  const [name, setName] = useState('World');

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <>
      <h1 data-testid="name">Welcome {name}</h1>
      <input data-testid="name-input" onChange={handleChange}/>
    </>
  )
}

export default Welcome;
