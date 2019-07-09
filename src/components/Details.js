import React from 'react';

export default function Details(props) {
    
  if (props.details) {
    if(props.details.type === 'character') {
      return (
        <div className="details-container">
          <img className="details-img" src={`${props.details.data.thumbnail.path}.${props.details.data.thumbnail.extension}`} alt="..."/>
          <div className="details-data">
            <h1 className="details-title">{props.details.data.name}</h1>
            <p className="details-description">{props.details.data.description}</p>
            <p className="contains">Appears in:</p>
            <ul className="details-ul">
              <li>Comics: {props.details.data.comics.available}</li>
              <li>Events: {props.details.data.events.available}</li>
              <li>Series: {props.details.data.series.available}</li>
              <li>Stories: {props.details.data.stories.available}</li>
            </ul>
            <a className="details-link" href={props.details.data.urls[0].url} rel="noopener noreferrer" target="_blank">Oficial info</a>
          </div>          
        </div>
      );
    } else {
      return (
        <div className="details-container">
          <img className="details-img" src={`${props.details.data.thumbnail.path}.${props.details.data.thumbnail.extension}`} alt="..."/>
          <div className="details-data">
            <h1 className="details-title">{props.details.data.title}</h1>
            <p className="details-description">{props.details.data.description}</p>
            <p className="contains">Contains:</p>
            <ul className="details-ul">
              <li>Characters: {props.details.data.characters.available}</li>
              <li>Comics: {props.details.data.comics.available}</li>
              <li>Series: {props.details.data.series.available}</li>
              <li>Stories: {props.details.data.stories.available}</li>
            </ul>
            <a className="details-link" href={props.details.data.urls[0].url} rel="noopener noreferrer" target="_blank">Oficial info</a>
          </div>          
        </div>
      );
    }
  }
  return (  
    <div className="container">
      
    </div>
  );
}