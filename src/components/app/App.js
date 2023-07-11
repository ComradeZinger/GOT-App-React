import React from 'react';

import AppTab from '../appTab/appTab';

import './App.css';
import AppHeader from '../appHeader/appHeader';

export default function App() {
  return (
    <div className="App">
      <AppHeader/>
      <AppTab/>
    </div>
  );
}

