// import Stopwatch component from Stopwatch
//Put Stopwatch element in <div>

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Stopwatch from './Component.js/Stopwatch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Stopwatch/>
        
      </header>
    </div>
  );
}

export default App;
