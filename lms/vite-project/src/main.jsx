import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './context/AuthContext';  // Import AuthProvider
import App from './App';

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);
