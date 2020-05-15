import React from 'react';

export default class HighScores extends React.Component{    
    render(){
        return(
            <div>
                <p className="CurrentScore">Current score: {this.props.score}</p>
            </div>
        );       
    } 
}