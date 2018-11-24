import React from 'react';
import account from './svg-icons/account.svg';

const IconSize = '30px';

const IconStyle = {
  margin: '5px'
}

export default () => {
  return (
    <img src={account} width={IconSize} height={IconSize} style={IconStyle} />
  )
}
