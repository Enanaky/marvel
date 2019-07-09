import React from 'react';
import { Link } from 'react-router-dom';

export default function Card(props) {
  
  return (
    <div className="card" >
      <img src={`${props.item.data.thumbnail.path}${props.imgFormat}${props.item.data.thumbnail.extension}`} className="card-img" alt="..."/>
      <div className="card-img-overlay">
        <Link className="card-link" to="/Details" onClick={() => props.showItInDetails(props.item)}><p className="card-title">{props.item.data.name}</p></Link>
        <button type="button" className="close" aria-label="Close" onClick={() => props.hideCard(props.item.data.id)}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>       
    </div>  
  );
}

