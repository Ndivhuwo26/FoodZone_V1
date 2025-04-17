import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ManuContextProvider } from './Context/ManuContext.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ManuContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ManuContextProvider>
  </React.StrictMode>
);
