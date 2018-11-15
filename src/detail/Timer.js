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
`

const PaleSmall = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: rgba(255,255,255,0.44);
  margin: 0;
  font-size: 0.9em;
`

export default () => {
  return (
    <BackgroundElement>
      <PaleSmall>RACE TIME ELAPSED</PaleSmall>
      <TimeBold>14:33</TimeBold>
    </BackgroundElement>
  )
}
