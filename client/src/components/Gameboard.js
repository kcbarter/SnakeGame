import React from 'react';

const HEIGHT = 300, WIDTH = 500;
const DIRECTIONS = [37, 38, 39, 40]; //left, up, right, down

export default class Gameboard extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      isHidden: false,
      direction: 39,
      snake: [[10,140], [20,140], [30, 140]]
    };
    
    this.startGame = this.startGame.bind(this);
    this.move = this.move.bind(this);
    
    this.canvasContext = React.createRef();
  }

  componentDidMount() {
    this.drawSnake();
  }

  drawSnake() {
    var ctx = this.canvasContext.current.getContext('2d');
    ctx.fillStyle = 'red';
    var currentSnake = this.state.snake;
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    
    currentSnake.forEach(section => {
      ctx.fillRect(section[0], section[1], 10, 10);
    });

    console.log("drawing: " + currentSnake[0][0]);
  }
  
  startGame(){
    this.setState({isHidden: !this.state.isHidden});
    document.addEventListener("keydown", this.changeDirection.bind(this));
    setInterval(this.move, 1000);
  }

  changeDirection(e){
    var newDirection = e.keyCode;

    if(DIRECTIONS.includes(newDirection) && Math.abs(newDirection-this.state.direction) !== 2){
      this.setState({direction: e.keyCode})
    }
  }

  move(){
    var currentSnake = this.state.snake;
    var head = currentSnake.length-1;

    for(var tail = 0; tail < head; tail++){
      currentSnake[tail][0] = currentSnake[tail+1][0];
      currentSnake[tail][1] = currentSnake[tail+1][1];
    }

    switch(this.state.direction){
      case 37: //left
        currentSnake[head][0] -= 10;
        break;
      case 38: //up
        currentSnake[head][1] -= 10;
        break;
      case 39: //right
        currentSnake[head][0] = currentSnake[head][0] + 10;
        break;
      case 40: //down
        currentSnake[head][1] += 10;
        break;
      default:
        console.log("Oops! That's not a valid direction...");
    }

    this.drawSnake();
  }

  endGame() {
    this.context.clearRect(0, 0, WIDTH, HEIGHT);
  }

  render() {
    return(
      <div className="Game">
        <canvas ref={this.canvasContext} height={HEIGHT} width={WIDTH}/>
        {!this.state.isHidden && <div className="Cover"></div>}
        {!this.state.isHidden && <button className="Start_button" onClick={this.startGame}>Start!</button>}
      </div>
    )
  }
}