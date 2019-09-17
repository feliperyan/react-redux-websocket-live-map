import React from 'react';
import './App.css';
import ConsoleComponet from './Components/console';
import Socketer from './Components/socketer';
// import MapComponent from './Components/map';
import MapContainer from './Containers/MapContainer';

function App() {
  return (
    <div className="App">
      <MapContainer />
      <ConsoleComponet />
      <Socketer />
    </div>
  );
}

export default App;
