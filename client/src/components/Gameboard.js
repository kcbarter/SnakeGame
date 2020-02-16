import React from 'react';

function rect(props) {
  const {ctx, x, y, width, height, color} = props;
  ctx.fillRect(x, y, width, height); 
}

export default class Gameboard extends React.Component {
  componentDidMount() {
    this.intiateCanvas();
  }

  intiateCanvas() {
    const ctx = this.refs.gameboard.getContext("2d");
    ctx.fillStyle = 'red';
    ctx.fillRect(10, 10, 10, 10);
    ctx.fillRect(20, 10, 10, 10);
    ctx.fillRect(30,10, 10, 10);
  }

  render() {
    return(
      <div>
        <canvas ref="gameboard" width={300} height={400} />
      </div>
    )
  }
}