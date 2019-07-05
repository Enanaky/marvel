import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './App.css';

import Navbar from './Navbar';
import Home from './Home';
import Grid from './Grid';
import Details from './Details';
import About from './About';
import Help from './Help';
import Footer from './Footer';

import getRandomData from '../firstData/initialData';


function App() {
  // const axios = require('axios');
  
  //
  // axios.get('https://gateway.marvel.com:443/v1/public/events/29/characters?limit=100&apikey=10ac447eeaab932197ccab181c31c749')
  //   .then(function (response) {
  //   console.log(response);
  // })
  //All the events
  // axios.get('https://gateway.marvel.com:443/v1/public/events?orderBy=name&limit=75&&apikey=10ac447eeaab932197ccab181c31c749')
  //   .then(function (response) {
  //   console.log("all events",response);
  // })
  //0-30 events
  // axios.get('https://gateway.marvel.com:443/v1/public/events?orderBy=name&limit=10&apikey=10ac447eeaab932197ccab181c31c749')
  // .then(function (response) {
  //   console.log("first 30 events",response);
  //   })
  // //31-60 events
  // axios.get('https://gateway.marvel.com:443/v1/public/events?orderBy=name&limit=30&offset=30&apikey=10ac447eeaab932197ccab181c31c749')
  //   .then(function (response) {
  //   console.log("31-60",response);
  //   })
  // //60-75 events
  // axios.get('https://gateway.marvel.com:443/v1/public/events?orderBy=name&limit=15&offset=60&apikey=10ac447eeaab932197ccab181c31c749')
  //   .then(function (response) {
  //   console.log("60-75",response);
  //   })
  // http://gateway.marvel.com/v1/public/events/314/characters?orderBy=name&limit=100&apikey=10ac447eeaab932197ccab181c31c749


  // const apiKey = '&apikey=10ac447eeaab932197ccab181c31c749';
  // const orderLimit = '?orderBy=name&limit=100';

  // async function getData(e) {
  //   const event = await axios.get(`http://gateway.marvel.com/v1/public/events/${e}?${apiKey}`)
  //     .then(function (res) {
        // console.log('event '+e, res.data.data.results[0]);        
        // axios.get(res.data.data.results[0].characters.collectionURI+orderLimit+apiKey)
        //   .then(function(res) {
        //     console.log('characters '+e,res);            
        //   })
        // return charactersEvent;
  //     })
    
  // }
  // getData(229);
  // const apiKey = '&apikey=10ac447eeaab932197ccab181c31c749';
  // const orderLimit = '?orderBy=name&limit=100';
  

  // async function getData(characters) {
  //   characters.forEach(heroe => {
  //     axios.get(`https://gateway.marvel.com:443/v1/public/characters/${heroe.id}?${apiKey}`)
  //       .then(function (res) {
  //         console.log(res.data.data.results[0]);        
  //       });   
  //   });
  // }
  // getData(initialCharacters);

  const initialRandomData = getRandomData();
  const [firstData, setFirstData] = useState(initialRandomData);
  // console.log(initialRandomData);
  
  return (
    <div className="app">
      <Link className="linkTitle" to="/"><h1 className="title"> MARVEL HEROES</h1></Link>
      <Navbar />
      <div className="body">
        <Switch>
          <Route 
            exact path="/" 
            render={props => <Home {...props}
            initialRandomData={initialRandomData}
            />}
          />
          <Route 
            path="/Grid" 
            render={props => <Grid {...props}
            //pass props here
            />}
          />
          <Route 
            path="/Details" 
            render={props => <Details {...props}
            //pass props here
            />}
          />
          <Route 
            path="/About" 
            render={props => <About {...props}
            //pass props here
            />}
          />
          <Route 
            path="/Help" 
            render={props => <Help {...props}
            //pass props here
            />}
          />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;

