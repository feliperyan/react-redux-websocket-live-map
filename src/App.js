import React from 'react';
import './App.css';
import ConsoleComponent from './Components/console';
import Socketer from './Components/socketer';
// import MapComponent from './Components/map';
import MapContainer from './Containers/MapContainer';

function App() {
  return (
    <div className="App">
      <Socketer />
      <MapContainer />
      <ConsoleComponent />          
    </div>
  );
}

export default App;
