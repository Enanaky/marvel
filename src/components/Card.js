import React from 'react';

export default function Card(props) {
  
  return (
    <div className="card" >
      <img src={`${props.item.hero.thumbnail.path}${props.imgFormat}${props.item.hero.thumbnail.extension}`} className="card-img" alt="..."/>
      <div className="card-img-overlay">
        <p className="card-title">{props.item.hero.name}</p>
        <button type="button" class="close" aria-label="Close" onClick={() => props.hideCard(props.item.hero.name)}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>       
    </div>  
  );
}

