import React from 'react';

export default function Card(props) {
  
  return (
    <div className="card" >
      <img src={`${props.item.data.thumbnail.path}${props.imgFormat}${props.item.data.thumbnail.extension}`} className="card-img" alt="..."/>
      <div className="card-img-overlay">
        <p className="card-title">{props.item.data.name}</p>
        <button type="button" className="close" aria-label="Close" onClick={() => props.hideCard(props.item.data.id)}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>       
    </div>  
  );
}

