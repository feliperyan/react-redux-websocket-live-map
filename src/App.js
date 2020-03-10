import React from 'react';
import './App.css';
import ConsoleComponent from './Components/console';
import Socketer from './Components/socketer';
import MapContainer from './Containers/MapContainer';
import DroneSignalContainer from './Containers/DroneSignalContainer';

import logo from './wing.svg';

function App() {
  return (
    
    <div className="App">
      <div className="row">
        <div className="column top-bar">          
          <img src={logo} alt="wing logo"/>
        </div>
      </div>
      <div className="row">
        <div className="double-column">
          <div className="map-container">
            <MapContainer />
          </div>
        </div>
        <div className="column">
        <div className="right-bar">
          <ConsoleComponent />
          <DroneSignalContainer />
        </div>
        </div>
      </div>      
      <Socketer />      
    </div>
  );
}

export default App;
