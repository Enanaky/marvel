import React from 'react';

export default class SearchBar extends React.Component {

  option = React.createRef();
  data = React.createRef();

  handleSubmit = e => {    
    //Stop the submitting behavior.
    e.preventDefault();
    //Take the data submitted.
    const data = this.data.current.value;
    const option = this.option.current.value;
    //Call searchHandler function
    this.props.searchHandler(data, option);
    e.currentTarget.reset();   
  }
  render() {
    return (
      <div className="form-container">
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <input 
            className="form-control" 
            id="tuvieja" 
            type="search" 
            ref={this.data} 
            placeholder="Name" 
            aria-label="Search"
            required
          />
          <select className="custom-select" id="inputGroupSelect01" ref={this.option}>
            <option value="character">Character</option>
            <option value="event">Event</option>
            <option value="all-events">All Events</option>
          </select>
          <button className="btn btn-light" type="submit" value="">Search</button>
        </form>
      </div>
    );
  }  
}

// export default SearchBar;