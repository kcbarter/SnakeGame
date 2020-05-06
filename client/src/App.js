import React from 'react';
import './App.css';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <div className="High_scores">
        <text>High Scores</text>
      </div>
      <div className="Personal_scores">
        <text>Personal Scores</text>
      </div>
      <Game/>
    </div>
  );
}

export default App;
