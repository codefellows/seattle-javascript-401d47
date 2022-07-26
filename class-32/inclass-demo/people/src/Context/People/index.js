import React, { useState } from 'react';

export const PeopleContext = React.createContext();

function PeopleProvider ({children}) {

  const [list, setList] = useState([{name: 'Ryan', age: 47}]);

  const addPerson = (person) => {
    if (person && person.name && person.age){
      setList([...list, person]);
    } else {
      console.error('Invalid Person');
    }
  }

  return (
    <PeopleContext.Provider value={{list, addPerson}} >
      {children}
    </PeopleContext.Provider>
  )
}

export default PeopleProvider;
