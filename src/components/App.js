import React, { useState, useEffect } from 'react';
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
import marvelApi from '../services/marvelApi';
import capital_letters from '../services/utils';


function App() {
  //first data used by the carousels.
  const initialRandomData = getRandomData();
  
  const [characters, setCharacters] = useState([]);
  const [events, setEvents] = useState([]);
  
  console.log(capital_letters('iron man'));
   
  function searchHandler(data, option) {
    let gotIt = false;
    let card = null;
    
    if (characters.length === 0) {
      searchIt(data, option);
    } else {
      console.log('quiero: ', data);
      
      const copy = characters.map(character => {
        if(character.hero.name === capital_letters(data)) {
          console.log('yala');          
          gotIt = true;
          return {
            ...character,
            visible: true,
          };       
        }
        return character;      
      });
      setCharacters(copy);
      if (gotIt === false) {  
        searchIt(data, option);
      }
    }
  }

  async function searchIt(data, option) {
    switch (option) {
      case "character": 
        try{
          const character = await marvelApi.getCharacterByName(data);
          console.log(character);
          if (character.data.results.length > 0) {
            const copyCharacters = [...characters, {hero: character.data.results[0], visible: true} ];
            setCharacters(copyCharacters);           
            
          } else {
            console.log('error');

          }
        }catch(err) {
          console.log(err);          
        }
      break;
      case "event":
        try{
          const event = await marvelApi.getEventById(data);
        }catch(err) {
          console.log(err);
        }
        break;
      case "all-events":
        console.log('todos los eventos');
        
        break;
      default:
        break;
    }
  }
  function hideCard(name) {
    const copy = characters.map(character => {
      if(character.hero.name === name) {
        return {
          ...character,
          visible: false,
        };
      }
      return character;
    });

    setCharacters(copy); 
  }

  useEffect(() => console.log('state => ',characters));

  return (
    <div className="app">
      <Link className="linkTitle" to="/"><h1 className="title"> MARVEL HEROES</h1></Link>
      <Navbar searchHandler={searchHandler}/>
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
            render={props => (
              <Grid {...props}
                characters={characters}
                hideCard={hideCard}
              />
            )}
          />
          <Route 
            path="/Details" 
            render={props => <Details {...props}
            events={events}
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

