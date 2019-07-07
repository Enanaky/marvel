import React from 'react';
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';

export default function Navbar(props) {

  return (
    <div className="navbar-container">
      <nav className="navbar navbar-light ">
        <Link className="navbar-link" to="/">HOME</Link>
        <Link className="navbar-link" to="/Grid">GRID</Link>
        <Link className="navbar-link" to="/Details">DETAILS</Link>
        <Link className="navbar-link" to="/Help">HELP</Link>
        <Link className="navbar-link" to="/About">ABOUT</Link>
        <Link className="navbar-link" to="/Grid"><button className="search-button" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"/></Link>
      </nav>
      <div className="collapse" id="collapseExample">
        <SearchBar searchHandler={props.searchHandler}/>
      </div>
    </div>
  );
}
        