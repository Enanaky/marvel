import React from 'react';

import Card from './Card';

export default function Gird(props) {
  
  function displayData(props) {
    const imgUrl = 'thumbnail.path';
    const extension = 'thumbnail.extension';
    const imgFormat = '/standard_xlarge.';
    const collection = [];

    return (props.characters.map(item => {  
      return item.visible && (
        <Card 
          key={item.hero.name}
          item={item}
          imgUrl={imgUrl}
          extension={extension}
          imgFormat={imgFormat}
          hideCard={props.hideCard}
        />
      );
    })).filter(Boolean);
  }
   
  return (
    <div className='container'>
      { props.characters.length > 0 && displayData(props) }        
    </div>
  );  
}
