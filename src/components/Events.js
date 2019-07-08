import React from 'react';

import Card from './Card';

export default function Events(props) {
  
  function displayData(props) {
    const imgUrl = 'thumbnail.path';
    const extension = 'thumbnail.extension';
    const imgFormat = '/standard_xlarge.';

    return (props.events.map(item => {  
      return item.visible && (
        <Card 
          key={item.data.title}
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
      { props.events.length > 0 && displayData(props) }        
    </div>
  );  
}
