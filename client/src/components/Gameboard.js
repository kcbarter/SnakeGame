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
    
    this.canvasContext = React.createRef();
  }

  componentDidMount() {
    this.context = this.canvasContext.current.getContext('2d');
    this.drawSnake();
  }

  drawSnake() {
    this.context.fillStyle = 'red';
    var currentSnake = this.state.snake;
    
    currentSnake.forEach(section => {
      this.context.fillRect(section[0], section[1], 10, 10);
    });
  }
  
  startGame(){
    this.setState({isHidden: !this.state.isHidden});
    document.addEventListener("keydown", this.changeDirection.bind(this));
  }

  changeDirection(e){

  }

  endGame() {
    this.context.clearRect(0, 0, 300, 300);
  }

  render() {
    return(
      <div className="Game">
        <canvas ref={this.canvasContext} height="300" width="500"/>
        {!this.state.isHidden && <div className="Cover"></div>}
        {!this.state.isHidden && <button className="Start_button" onClick={this.startGame}>Start!</button>}
      </div>
    )
  }
}