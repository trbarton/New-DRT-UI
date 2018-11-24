import React, { Component } from 'react';
import styled from 'styled-components'

const BackgroundElement = styled.div`
  width: 100%;
  height: 200px;
  background: #7FA6F7;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16);
`;

const TimeBold = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: white;
  font-size: 6em;
  margin: 0;
  font-variant-numeric: tabular-nums;
`

const PaleSmall = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: rgba(255,255,255,0.44);
  margin: 0;
  font-size: 0.9em;
`

class Timer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      seconds: '00',
      minutes: '00'
    }
    this.secondsRemaining = 0;

    this.tick = this.tick.bind(this);
  }

  componentDidMount () {
    setInterval(this.tick, 1000);
  }

  tick() {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - (min * 60);
    this.setState({
      minutes: min,
      seconds: sec
    })
    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds,
      })
    }
    if (min < 10) {
      this.setState({
        minutes: "0" + min,
      })
    }
    this.secondsRemaining++
  }

  render() {
    return (
      <BackgroundElement>
        <PaleSmall>RACE TIME ELAPSED</PaleSmall>
        <TimeBold>{this.state.minutes}:{this.state.seconds}</TimeBold>
      </BackgroundElement>
    )
  }
}

export default Timer;