
import React from 'react';
import ReactDOM from 'react-dom';
import './componentes/css/Boostrap.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App"
import BottonLog from "./componentes/componentes/BotonLog"



ReactDOM.render(
  <Router>
  
  <App />
  </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

