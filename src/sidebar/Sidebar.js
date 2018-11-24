import React, { Component } from 'react';
import styled from 'styled-components'
import HomeGroup from './HomeGroup';
import ControlGroup from './ControlGroup';
import AccountGroup from './AccountGroup';

const ElementBackground = styled.div`
  position: fixed;
  width: 5%;
  min-width: 60px;
  max-width: 80px;
  top: 0;
  left: 0;
  bottom: 0;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 25px 5px;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.16)
`;

class Sidebar extends Component {
  render() {
    return (
      <ElementBackground>
        <HomeGroup></HomeGroup>
        <ControlGroup></ControlGroup>
        <AccountGroup></AccountGroup>
      </ElementBackground>
    );
  }
}

export default Sidebar;
