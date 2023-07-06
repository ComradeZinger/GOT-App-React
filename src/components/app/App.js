import React from 'react';
import { Button } from 'reactstrap';

// import logo from './logo.svg';
import RandomCharacter from '../randomCharacter/randomCharacter';
// import charctersList from '../charctersList/charctersList';
import CharacterDetails from '../characterDetails/characterDetails';

import './App.css';

export default function App() {
  return (
    <div className="App">

      <div className='App-header'>
        <h2 className='App-title'>Game of Thrones DB</h2>
        <div>
          <Button className='App-header-btn App-header-btn-active'>Characters</Button>
          <Button className='App-header-btn' outline>Houses</Button>
          <Button className='App-header-btn' outline>Books</Button>
        </div>
      </div>
      <div className='App-body'>
        <CharacterDetails />
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </div>
    </div>
  );
}

