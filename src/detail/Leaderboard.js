import React, { Component } from 'react';
import styled from 'styled-components'

const BackgroundElement = styled.div`
  width: 100%;
  flex-grow: 1;
  padding: 5% 0;
  text-align: left;
`;

const Title = styled.h2`
  color: rgba(101,101,101,0.22);
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1.1em;
  margin: 0 5%;
`

const Competitor = styled.div`
  width: 100%;
  height: 35px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 1.2em;
  border-right: 8px solid #4df28a;
  box-sizing: border-box;
  margin: 0.5em 0;
  padding-left: 5%;
  color: rgba(101,101,101,0.53);
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Bold = styled.span`
  font-weight: 500;
  padding-left: 0.5em;
`
const Spacer = styled.div`
  flex-grow: 1;
`

const competitors = [
  {name: "Laser 13404", speed: "10.1"},
  {name: "Laser 13404", speed: "10.1"},
  {name: "Laser 13404", speed: "10.1"},
  {name: "Laser 13404", speed: "10.1"},
]

const colours = [
  "#4df28a",
  "#FF9200",
  "#FF3B00",
  "#00FFFF",
  "#0076FF",
  "#3100FF",
  "#9300FF",
  "#EB00FF",
  "#FF004E"
]

export default () => {
  return (
    <BackgroundElement>
      <Title>Leaderboard</Title>
      {competitors.map((c, index) => {
        return (
          <Competitor style={{borderColor: colours[index]}}>
            1. <Bold>Laser 13404</Bold><Spacer />SOG: <Bold>10.1 Knots</Bold><Spacer />
          </Competitor>
        )
      })}

    </BackgroundElement>
  )
}
