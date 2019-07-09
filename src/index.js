import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components//App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL + '/'}> 
    <App  />
  </BrowserRouter>,
  document.getElementById('root')
);

// basename={process.env.PUBLIC_URL + '/' IT'S FOR MAKE IT WORK ON GITHUB PAGES DEPLOYMENT
serviceWorker.unregister();
