import React, { useState } from 'react';

// 3 steps to use context
// step 1:  Create context object
export const SettingsContext = React.createContext();

// step 2: create a provider component
function SettingsProvider ({children}){

  // step 3: 
  const [completed, setcompleted] = useState(false);
  const [pageItems, setPageItems] = useState(3);
  const [sort, setSort] = useState('difficulty');

  const addCompletedItem = (item) => {
    // use this to change state --- possibly today???
  }

  return(
    <SettingsContext.Provider value={{completed, pageItems, sort, addCompletedItem}}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;
