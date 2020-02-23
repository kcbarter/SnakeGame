import React from 'react';
import Gameboard from './components/Gameboard';
import './App.css';

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
      <div className="Game_settings">
        <text>Settings</text>
      </div>
    </div>
  );
}

export default App;
