import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './App.css';

import Navbar from './Navbar';
import Home from './Home';
import Characters from './Characters';
import Events from './Events';
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
  const [details, setDetails] = useState();
    
  function searchHandler(data, option) {
    if (option === 'character') {
      checkCharactersState(data, option);
      console.log('quiero un char');      
    };
    if (option === 'event') {
      checkEventsState(data, option);
      console.log('quiero un evento');      
    }
  }

  function checkCharactersState(data, option) {
    let gotIt = false;
    if (characters.length === 0) {
      searchIt(data, option);
    } else {      
      const copy = characters.map(character => {
        if(character.data.name === capital_letters(data)) {
          console.log(' character yala');          
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
  function checkEventsState(data, option) {
    let gotIt = false;
    if (events.length === 0) {
      searchIt(data, option);
    } else {      
      const copy = events.map(event => {
        if(event.data.title === capital_letters(data)) {
          console.log('evento yala');          
          gotIt = true;
          return {
            ...event,
            visible: true,
          };       
        }
        return events;      
      });
      setEvents(copy);
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
            const copyCharacters = [...characters, {data: character.data.results[0], visible: true} ];
            setCharacters(copyCharacters);
          } else {
            console.log('character search error');//INSERT POPUPT HERE
          }
        }catch(err) {
          console.log(err);          
        }
      break;
      case "event":
        try{
          const event = await marvelApi.getEventByName(data);
          console.log(event.data.results[0]);
          if (event.data.results.length > 0) {
            const copyEvents = [...events, {data: event.data.results[0], visible: true} ];
            setEvents(copyEvents);
          } else {
            console.log('event search error');//INSERT POPUPT HERE
          }
          
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
  function hideCard(id) {
    const copyCharacters = characters.map(character => {
      if(character.data.id === id) {
        return {
          ...character,
          visible: false,
        };
      }
      return character;
    });
    setCharacters(copyCharacters);
    const copyEvents = events.map(event => {
      if(event.data.id === id) {
        return {
          ...event,
          visible: false,
        };
      }
      return event;
    });
    setEvents(copyEvents);
  }

  
  useEffect(() => {
    console.log('characters => ', characters);
    console.log('events => ', events);
    console.log('details => ', details);
    
  });

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
            path="/Characters" 
            render={props => (
              <Characters {...props}
                characters={characters}
                hideCard={hideCard}
              />
            )}
          />
          <Route 
            path="/Events" 
            render={props => (
              <Events {...props}
                events={events}
                hideCard={hideCard}
              />
            )}
          />
          <Route 
            path="/Details" 
            render={props => <Details {...props}
            details={details}
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

