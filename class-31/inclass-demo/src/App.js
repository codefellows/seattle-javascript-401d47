import { ThemeContext } from './Context/Theme';
import Heading from'./Components/Header';

import './App.css';

function App() {
  return (
    <>
      <Heading />
      <ThemeContext.Consumer>
        {
          (theme) => (
            <h3>{theme.mode}</h3>
          )
        }
      </ThemeContext.Consumer>
    </>
  );
}

export default App;
