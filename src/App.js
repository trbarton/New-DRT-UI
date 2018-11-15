import React, { Component } from 'react';
import './App.css';
import Sidebar from './sidebar/Sidebar';
import Map from './map/Map';
import Detail from './detail/Detail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar></Sidebar>
        <Map></Map>
        <Detail></Detail>
      </div>
    );
  }
}

export default App;
