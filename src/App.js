// import Stopwatch component from Stopwatch
//Put Stopwatch element in <div>

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Stopwatch from './Component.js/Stopwatch';
import DateTimer from './Component.js/DateTimer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <Stopwatch/>
        
      </header>
      <header className="App-header">
       
      <DateTimer />
        
      </header>
      
    </div>
  );
}

export default App;
