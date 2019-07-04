import React from 'react';

import CarouselCard from './CarouselCard';
import { initialEvents, initialCharacters } from '../firstData/initialData';


export default function Home() {
  
  return(
    <div>
      <p>Home!</p>
      <CarouselCard heroes={initialCharacters}/>
    </div>
  );
}