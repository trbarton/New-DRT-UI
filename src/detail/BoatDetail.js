import React, { Component } from 'react';
import styled from 'styled-components'

const BackgroundElement = styled.div`
  width: 100%;
  height: 25%;
  background: #E3EDF7;
  border-left: 8px solid #4df28a;
`;

export default () => {
  return (
    <BackgroundElement></BackgroundElement>
  )
}
