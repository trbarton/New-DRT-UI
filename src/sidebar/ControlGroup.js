import React from 'react';
import styled from 'styled-components';

import play from './svg-icons/play.svg';
import stop from './svg-icons/stop.svg';
import rewind from './svg-icons/rewind.svg';

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconSize = '30px';

const IconStyle = {
  margin: '5px'
}

export default () => {
  return (
    <IconContainer>
      <img src={play} width={IconSize} height={IconSize} style={IconStyle} />
      <img src={stop} width={IconSize} height={IconSize}  style={IconStyle} />
      <img src={rewind} width={IconSize} height={IconSize}  style={IconStyle} />
    </IconContainer>
  )
}
