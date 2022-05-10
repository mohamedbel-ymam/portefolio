import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './context';
import { HashRouter } from 'react-router-dom';




const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <ThemeProvider>
    <HashRouter>
    <App />
    </HashRouter>,
    </ThemeProvider>,
  );
  
