import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './Nav.js';
import MainPage from './MainPage.js';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render (
  <React.StrictMode>
    <div className="container">
      <Nav />
      <MainPage />
    </div>
  </React.StrictMode> 

)