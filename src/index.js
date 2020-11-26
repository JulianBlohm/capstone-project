import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from './styles/GlobalStyle'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

