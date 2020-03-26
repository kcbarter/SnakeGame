import React from 'react';

const HEIGHT = 300, WIDTH = 500;
const DIRECTIONS = [37, 38, 39, 40]; //left, up, right, down

export default class Gameboard extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      isHidden: false,
      direction: 39,
      snake: [[10,140], [20,140], [30, 140]],
      food: [0,0]
    };
    
    this.startGame = this.startGame.bind(this);
    this.move = this.move.bind(this);
    
    this.canvasContext = React.createRef();
  }

  componentDidMount() {
    this.generateFood();
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
        currentSnake[head][0] += 10;
        break;
      case 40: //down
        currentSnake[head][1] += 10;
        break;
      default:
        console.log("Oops! That's not a valid direction...");
    }

    this.eatFood();
    this.drawSnake();
    this.drawFood(this.state.food);
  }

  drawFood(foodPosition) {
      var ctx = this.canvasContext.current.getContext('2d');
      ctx.fillStyle = 'pink';
      ctx.fillRect(foodPosition[0], foodPosition[1], 10, 10);
  }

  getRandomCords(){
    var x = Math.floor(Math.random() * (WIDTH - 9));
    var y = Math.floor(Math.random() * (HEIGHT - 9));
    x = Math.round(x/10) * 10;
    y = Math.round(y/10) * 10;
    return [x, y];
  }

  generateFood(){
    var foodPosition;
    do{
      foodPosition = this.getRandomCords();
    } while(this.state.snake.includes(foodPosition));
    this.setState({food: foodPosition});
  }

  eatFood(){
    var currentSnake = this.state.snake;
    var head = currentSnake[currentSnake.length - 1];
    var foodPosition = this.state.food;
    if(head[0] === foodPosition[0] && head[1] === foodPosition[1]){
      this.generateFood();
      this.growSnake();
    }
  }

  growSnake(){
    var currentSnake = this.state.snake;
    var tail = currentSnake[0];
    var compare = currentSnake[1];
    var x = tail[0];
    var y = tail[1];

    if(tail[0] === compare[0]){
      x = tail[0] + 10; 
      y = tail[1];
    }
    else{
      x = tail[0];
      y = tail[1] + 10;
    }

    var newTail = [x, y];

    console.log('new tail x ' + x + ' vs old tail ' + tail[0]);
    console.log('new tail ' + newTail[0] + ' ' + newTail[1]);
    console.log('old tail ' + tail[0] + ' ' + tail[1]);
    console.log('new tail y ' + y + ' vs old tail ' + tail[1]);

    currentSnake.unshift([newTail[0], [1]]);
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