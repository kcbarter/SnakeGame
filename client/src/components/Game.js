import React from 'react';
import Gameboard from './Gameboard';
import Settings from './Setting';

export default class Game extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            speedMod: 1
        }

        this.setSpeed = this.setSpeed.bind(this);
    }

    setSpeed(event, speed){
        this.setState({
            speedMod: speed
        })
    }

    render(){
        return(
            <div className="Game">
                <Gameboard speedMod = {this.state.speedMod}/>
                <Settings setSpeed = {this.setSpeed}/>
            </div>
        )
    }
}