import React, { Component } from 'react';
import styled from 'styled-components'
import BoatDetail from './BoatDetail';
import Leaderboard from './Leaderboard';
import Timer from './Timer';

const BackgroundElement = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 25vw;
  height: 100%;
  background: #F2F5FA;
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16);
`;

class Detail extends Component {
  render() {
    return (
      <BackgroundElement>
        <Timer></Timer>
        <Leaderboard></Leaderboard>
        <BoatDetail></BoatDetail>
      </BackgroundElement>
    );
  }
}

export default Detail;
