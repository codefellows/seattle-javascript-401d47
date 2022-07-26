import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import SettingsProvider from './context/settings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SettingsProvider>
      <App />
    </SettingsProvider>
  </React.StrictMode>
);

