import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <div className="navbar-container">
      <nav className="navbar navbar-light ">
        <Link className="" to="/"><h1 className="navbar-link">HOME</h1></Link>
        <Link className="" to="/Grid"><h1 className="navbar-link">GRID</h1></Link>
        <Link className="" to="/Details"><h1 className="navbar-link">DETAILS</h1></Link>
        <Link className="" to="/Help"><h1 className="navbar-link">HELP</h1></Link>
        <Link className="" to="/About"><h1 className="navbar-link">ABOUT</h1></Link>
        <button className="search-button" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"/>
      </nav>
      <div className="collapse" id="collapseExample">
      <div className="form-container">
        <form className="form-inline">
          <input className="form-control" id="tuvieja" type="search" placeholder="Name" aria-label="Search"/>
          <select className="custom-select" id="inputGroupSelect01">
            <option default value="character">Character</option>
            <option value="event">Event</option>
            <option value="all-events">All Events</option>
          </select>
          <button className="btn btn-light" type="submit">Search</button>
        </form>
      </div>
      </div>
    </div>
  );
}
        