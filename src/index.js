import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './context';
import { BrowserRouter } from "react-router-dom";



const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <ThemeProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>,
    </ThemeProvider>,
  );
  
