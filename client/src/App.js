import React from 'react';
import './App.css';
import Game from './components/Game';
import HighScores from './components/HighScores';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      score: 0 //TODO this should retrieve "Previous Score" from db
    }

    this.update = this.update.bind(this);
  }

  update(score){
    this.setState({
      score: score
    });
  }

  render(){
    return(
      <div className="App">
        <HighScores score = {this.state.score}/>
        <div className="Personal_scores">
          <text>Personal Scores</text>
        </div>
        <Game update = {this.update}/>
      </div>
    )
  }
}

export default App;
