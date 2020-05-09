import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Checkbox } from '@material-ui/core';

const marks = [
    {
      value: 0.5,
      label: 'x0.5',
    },
    {
      value: 1,
      label: 'x1.0',
    },
    {
      value: 2,
      label: 'x2.0',
    },
    {
      value: 4,
      label: 'x4.0',
    },
  ];
  
  function valuetext(value) {
    return `${value}°C`;
  }
  
  function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }

export default class Settings extends React.Component{
    render(){
        return(
            <div className="Game_settings">
                <Typography id="speed-label" gutterBottom>
                    Speed Modifier
                </Typography>
                <Slider id="speed-slider"
                    defaultValue={1}
                    valueLabelFormat={valueLabelFormat}
                    getAriaValueText={valuetext}
                    aria-labelledby="speed-label"
                    step={null}
                    valueLabelDisplay="auto"
                    marks={marks}
                    min={0.5}
                    max={4}
                    onChangeCommitted={this.props.setSpeed}
                />
                <Typography id="open-border-label">
                    Open Border?
                </Typography>
                <Checkbox id="open-border"
                    aria-labelledby="open-border-label"
                    value={!this.props.setBorder}
                    onChange={this.props.setBorder}
                />
            </div>
        )
    }
}