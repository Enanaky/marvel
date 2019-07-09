import React from 'react';
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';

export default function Navbar(props) {

  function handleClickNavigationEvent(e) {
    const home = document.querySelector('.navbar-home');
    const char = document.querySelector('.navbar-characters');
    const events = document.querySelector('.navbar-events');
    const details = document.querySelector('.navbar-details');
    const help = document.querySelector('.navbar-help');
    
    const navbar = [ home, char, events, details, help ];
  
    navbar.forEach(item => {
      if (item === e.currentTarget) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }


  return (
    <div className="navbar-container">
      <nav className="navbar navbar-light ">
        <Link className="navbar-link navbar-home active" onClick={(e) => handleClickNavigationEvent(e)} to="/">HOME</Link>
        <Link className="navbar-link navbar-characters" onClick={(e) => handleClickNavigationEvent(e)} to="/Characters">CHARACTERS</Link>
        <Link className="navbar-link navbar-events" onClick={(e) => handleClickNavigationEvent(e)} to="/Events">EVENTS</Link>
        <Link className="navbar-link navbar-details" onClick={(e) => handleClickNavigationEvent(e)} to="/Details">DETAILS</Link>
        <Link className="navbar-link navbar-help" onClick={(e) => handleClickNavigationEvent(e)} to="/Help">HELP</Link>
        <button className="search-button" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"/>
      </nav>
      <div className="collapse" id="collapseExample">
        <SearchBar searchHandler={props.searchHandler}/>
      </div>
    </div>
  );
}
        