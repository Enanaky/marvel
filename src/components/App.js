import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './App.css';

import Navbar from './Navbar';
import Home from './Home';
import Characters from './Characters';
import Events from './Events';
import Details from './Details';
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
    } else {
      checkEventsState(data, option);
    }
  }
  function checkCharactersState(data, option) {
    let gotIt = false;
    if (characters.length === 0) {
      searchIt(data, option);
    } else {      
      const copy = characters.map(character => {
        if(character.data.name === capital_letters(data)) {
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
          gotIt = true;
          return {
            ...event,
            visible: true,
          };  
        }
        return event;      
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
          if (character.data.results.length > 0) {
            const copyCharacters = [...characters, {data: character.data.results[0], type: option, visible: true} ];
            setCharacters(copyCharacters);
          } else {
          }
        }catch(err) {
        }
      break;
      case "event":
        try{
          const event = await marvelApi.getEventByName(data);
          if (event.data.results.length > 0) {
            const copyEvents = [...events, {data: event.data.results[0], type: option, visible: true} ];
            setEvents(copyEvents);
          } else {
          }
          
        }catch(err) {
        }
        break;
      default:
        break;
    }
  }
  function hideCard(n) {
    const copyCharacters = characters.map(character => {
      
      if(character.data.id === n) {
        return {
          ...character,
          visible: false,
        };
      }
      return character;
    });
    setCharacters(copyCharacters);
    const copyEvents = events.map(event => {
      if(event.data.id === n) {
        return {
          ...event,
          visible: false,
        };
      }
      return event;
    });
    setEvents(copyEvents);
  }
  function showItInDetails(item) {
    setDetails(item);
    document.querySelector('.navbar-home').classList.remove('active');
    document.querySelector('.navbar-characters').classList.remove('active');
    document.querySelector('.navbar-events').classList.remove('active');
    document.querySelector('.navbar-details').classList.add('active');
    document.querySelector('.navbar-help').classList.remove('active');
  }
  function carouselToGrid(item){
    if (item.type === 'character') {
      searchHandler(item.name, item.type);
      document.querySelector('.navbar-home').classList.remove('active');
      document.querySelector('.navbar-characters').classList.add('active');
    } else {
      searchHandler(item.name, item.type);
      document.querySelector('.navbar-home').classList.remove('active');
      document.querySelector('.navbar-events').classList.remove('active');
    }
    
  }
  useEffect(() => {
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
            carouselToGrid={carouselToGrid}
            />}
          />
          <Route 
            path="/Characters" 
            render={props => (
              <Characters {...props}
                characters={characters}
                hideCard={hideCard}
                showItInDetails={showItInDetails}
              />
            )}
          />
          <Route 
            path="/Events" 
            render={props => (
              <Events {...props}
                events={events}
                hideCard={hideCard}
                showItInDetails={showItInDetails}
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

