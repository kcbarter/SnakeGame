import React from 'react';
import Gameboard from './components/Gameboard';
import './App.css';
import Settings from './components/Setting';

function App() {
  return (
    <div className="App">
      <div className="High_scores">
        <text>High Scores</text>
      </div>
      <Gameboard/>
      <div className="Personal_scores">
        <text>Personal Scores</text>
      </div>
      <Settings/>
    </div>
  );
}

export default App;
