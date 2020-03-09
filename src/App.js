import React from 'react';
import './App.css';
import ConsoleComponent from './Components/console';
import Socketer from './Components/socketer';
// import MapComponent from './Components/map';
import MapContainer from './Containers/MapContainer';
import DroneSignalContainer from './Containers/DroneSignalContainer';

function App() {
  return (
    <div className="App">
      <div className="map-container">
        <MapContainer />
      </div>
      <div className="left-bar">
        <ConsoleComponent />
        <DroneSignalContainer />
      </div>
      <Socketer />      
    </div>
  );
}

export default App;
