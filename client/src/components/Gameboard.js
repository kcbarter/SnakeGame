import React from 'react';

const RIGHT = 39, LEFT = 37, UP = 38, DOWN = 40;

export default class Gameboard extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      isHidden: false,
      direction: RIGHT,
      snake: [[10,140], [20,140], [30, 140]]
    };
    
    this.startGame = this.startGame.bind(this);
  }

  componentDidMount() {
    this.intiateCanvas();
  }

  drawSnake(props) {
    const {ctx} = props;
    // ctx.fillStyle = 'red';
    var currentSnake = this.state.snake;
    
    currentSnake.forEach(section => {
      ctx.rect(section[0], section[1], 10, 10);
    });
  }

  intiateCanvas() {
    const ctx = this.refs.gameboard.getContext("2d");
    this.drawSnake(ctx);
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
        <canvas ref="gameboard" height="300" width="500"/>
        {!this.state.isHidden && <div className="Cover"></div>}
        {!this.state.isHidden && <button className="Start_button" onClick={this.startGame}>Start!</button>}
      </div>
    )
  }
}