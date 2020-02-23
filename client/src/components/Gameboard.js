import React from 'react';

const RIGHT = 39, LEFT = 37, UP = 38, DOWN = 40;

export default class Gameboard extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      isHidden: false,
      direction: RIGHT
    };
    
    this.startGame = this.startGame.bind(this);
  }

  componentDidMount() {
    this.intiateCanvas();
  }

  rect(props) {
    const {ctx, x, y} = props;
    ctx.fillStyle = 'red';
    ctx.fillRect(x, y, 10, 10); 
  }

  intiateCanvas() {
    const ctx = this.refs.gameboard.getContext("2d");
    this.rect({ctx, x: 10, y: 10});
    this.rect({ctx, x: 20, y: 10});
    this.rect({ctx, x: 30, y: 10});
  }
  
  startGame(){
    this.setState({isHidden: !this.state.isHidden});
    document.addEventListener("keydown", this.changeDirection.bind(this));
  }

  changeDirection(e){

  }

  endGame() {
    const ctx = this.refs.gameboard.gameboard("2d");
    ctx.clearRect(0, 0, 300, 300);
  }

  render() {
    return(
      <div className="Game">
        <canvas ref="gameboard"/>
        {!this.state.isHidden && <div className="Cover"></div>}
        {!this.state.isHidden && <button className="Start_button" onClick={this.startGame}>Start!</button>}
      </div>
    )
  }
}