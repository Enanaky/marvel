import React from 'react';

import Card from './Card';

export default function Characters(props) {
  
  function displayData(props) {
    const imgUrl = 'thumbnail.path';
    const extension = 'thumbnail.extension';
    const imgFormat = '/standard_xlarge.';
    
    
    return (props.characters.map(item => {  
      return item.visible && (
        <Card 
          type="character"
          key={item.data.name}
          item={item}
          imgUrl={imgUrl}
          extension={extension}
          imgFormat={imgFormat}
          hideCard={props.hideCard}
          showItInDetails={props.showItInDetails}
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
