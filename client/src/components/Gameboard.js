import React from 'react';

export default class Gameboard extends React.Component {
  componentDidMount() {
    const canvas = this.refs.gameboard
    const ctx = canvas.getContext("2d")
  }

  render() {
    return(
      <div>
        <canvas ref="gameboard" width={300} height={400} />
      </div>
    )
  }
}