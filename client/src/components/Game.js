import React from 'react';
import Gameboard from './Gameboard';
import Settings from './Setting';

export default class Game extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            speedMod: 1,
            openBorder: false
        }

        this.setSpeed = this.setSpeed.bind(this);
        this.setBorder = this.setBorder.bind(this);
    }

    setSpeed(event, speed){
        this.setState({
            speedMod: speed
        })
    }

    setBorder(event, border){
        this.setState({
            openBorder: border
        })
    }

    render(){
        return(
            <div className="Game">
                <Gameboard update = {this.props.update} speedMod = {this.state.speedMod} 
                    openBorder = {this.state.openBorder}/>
                <Settings setSpeed = {this.setSpeed} setBorder = {this.setBorder}/>
            </div>
        )
    }
}