import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PeopleProvider from './Context/People';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PeopleProvider>
      <App />
    </PeopleProvider>
  </React.StrictMode>
);


