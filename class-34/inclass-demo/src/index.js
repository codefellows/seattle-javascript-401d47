import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SettingsProvider from './Context/Settings';
import AuthProvider from './Context/Auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </AuthProvider>
  </React.StrictMode>
);

