import React, { Component } from 'react';
import styled from 'styled-components';
// import img from 'map-bg.png';

const MapElement = styled.div`
  width: 100%;
  height: 100%;

`;

class Map extends Component {
  render() {
    return (
      <MapElement></MapElement>
    );
  }
}

export default Map;
