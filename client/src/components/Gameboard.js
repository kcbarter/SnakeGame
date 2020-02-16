import React from 'react';

function rect(props) {
  const {ctx, x, y, width, height} = props;
  ctx.fillStyle = 'red';
  ctx.fillRect(x, y, width, height); 
}

export default class Gameboard extends React.Component {
  componentDidMount() {
    this.intiateCanvas();
  }

  intiateCanvas() {
    const ctx = this.refs.gameboard.getContext("2d");
    rect({ctx, x: 10, y: 10, width: 10, height: 10});
    rect({ctx, x: 20, y: 10, width: 10, height: 10});
    rect({ctx, x: 30, y: 10, width: 10, height: 10});
  }

  endGame() {
    const ctx = this.refs.gameboard.gameboard("2d");
    ctx.clearRect(0, 0, 300, 300);
  }

  render() {
    return(
      <div>
        <canvas ref="gameboard" width={300} height={400} />
      </div>
    )
  }
}