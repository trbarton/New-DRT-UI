import React from 'react';
import home from './svg-icons/home.svg';

const IconSize = '30px';

const IconStyle = {
  margin: '5px'
}

export default () => {
  return (
    <img src={home} width={IconSize} height={IconSize} style={IconStyle} />
  )
}
