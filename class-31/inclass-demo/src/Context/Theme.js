import React, { useState } from 'react';

// creates our context object, gives the name ThemeContext
export const ThemeContext = React.createContext();

// create a component that exports a Provider from our context object
function ThemeProvider({children}){

  const [mode, setMode] = useState('light');

  return(
    <ThemeContext.Provider value={{ mode }}>
      {children}
    </ThemeContext.Provider>
  )

}

export default ThemeProvider;
