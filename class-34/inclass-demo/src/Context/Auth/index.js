import React, { useState, useEffect } from 'react';
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import base64 from 'base-64';

export const AuthContext = React.createContext();

function AuthProvider({children}) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const can = (capability) => {
    // note the shorthand
    return user?.capabilities?.includes(capability);
  }

  const login = async (username, password) => {

    // const basicEncoding = base64.encode(`${username}:${password}`);
    const config = {
      baseURL: 'https://api-js401.herokuapp.com',
      url: '/signin',
      method: 'post',
      // headers: {
      //   'Authorization': `Basic ${basicEncoding}`
      // },
      auth: {
        username,
        password,
      }
    }

    const response = await axios(config);
    const { token } = response.data

    if (token){
      try {
       _validateToken(token);
      } catch (e){
        // maybe setError?
        console.error(e);
      }
    }
  }

  function _validateToken(token){
    try {
      let validUser = jwt_decode(token);
      if(validUser){
        setUser(validUser);
        setIsLoggedIn(true);
        cookie.save('auth', token)
      }
    } catch(e){
      setIsLoggedIn(false);
      setError(e)
    }
  }

  const logout = () => {
    setUser({});
    setIsLoggedIn(false);
    setError(null);
    cookie.remove('auth');
  }

  useEffect(() => {

    let token = cookie.load('auth');

    if (token) {
      _validateToken(token);
    }

    // missing:  after loading cookies how do we validate - and log back in?
  }, []);

  const values = {
    isLoggedIn,
    user,
    error,
    can,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )

}

export default AuthProvider
