import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const axios = require('axios');
  axios.get('https://gateway.marvel.com:443/v1/public/events/29/characters?limit=58&apikey=10ac447eeaab932197ccab181c31c749')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
