import React from 'react';

import CarouselCard from './CarouselCard';

export default function Home(props) {

  return(
    <div className="home">
      <CarouselCard initialRandomData={props.initialRandomData.randomCharacters}/>
      <CarouselCard initialRandomData={props.initialRandomData.randomEvents}/>
    </div>
  );
}