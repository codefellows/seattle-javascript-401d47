import { useContext } from 'react';
import SettingsForm from './Components/SettingsForm';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ToDo from './Components/ToDo';
import Login from './Components/Login';
import { When } from 'react-if';
import { AuthContext } from './Context/Auth';
import Auth from './Components/Auth';

const App = () => {
  const { isLoggedIn, logout, user } = useContext(AuthContext);
  console.log(user);

  return (
    <>
      <BrowserRouter>
        <header>
          <When condition={isLoggedIn}>
            <Link default to="/" style={{ margin: '25px' }}>Home</Link>
            <Link to="/settings">Settings</Link>
            <button style={{ margin: '25px' }} onClick={logout}>Log Out</button>
          </When>
          <When condition={!isLoggedIn}>
            <Login />
          </When>

        </header>

        <When condition={isLoggedIn}>

          <Routes>
            <Route path="/" element={<ToDo />} />
            <Route path="/settings" element={<SettingsForm />} />
          </Routes>
        </When>
      </BrowserRouter>

      <Auth capability="read">
        <p>I can read!</p>
      </Auth>
      <Auth capability="create">
        <p>I can create!</p>
      </Auth>
      <Auth capability="update">
        <p>I can update!</p>
      </Auth>
      <Auth capability="delete">
        <p>I can delete!</p>
      </Auth>
    </>
  );

}

export default App;
