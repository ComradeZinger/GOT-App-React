import React from 'react';

import RandomCharacter from '../randomCharacter/randomCharacter';

import './characterDetails.css';

export default function CharacterDetails() {
  return (
    <div className='characterDetails'>
      <RandomCharacter/>
    </div>
  );
}