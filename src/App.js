import React from 'react';
import './App.css';
import ConsoleComponent from './Components/console';
import Socketer from './Components/socketer';
import MapContainer from './Containers/MapContainer';
import DroneSignalContainer from './Containers/DroneSignalContainer';

import logo from './logo2.svg';
// import logo from './9855.jpg';

function App() {

  let ws_address = "ws://localhost:8080/ws"
  if (process.env.REACT_APP_WSADDRESS !== "" && process.env.REACT_APP_WSADDRESS !== undefined) {
    ws_address = process.env.REACT_APP_WSADDRESS + "/ws";
  }

  return (
    
    <div className="App">
      <div className="row">
        <div className="column top-bar">          
          <img src={logo} alt="logo"/>
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
      <Socketer address={ws_address}/>
    </div>
  );
}

export default App;
