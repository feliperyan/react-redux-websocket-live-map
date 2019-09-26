import React from 'react';
import './App.css';
import ConsoleComponent from './Components/console';
import Socketer from './Components/socketer';
// import MapComponent from './Components/map';
import MapContainer from './Containers/MapContainer';
import QuadrantListComponent from './Components/quadrants';

function App() {
  return (
    <div className="App">
      <MapContainer />
      <ConsoleComponent />
      <Socketer />
      <QuadrantListComponent />
    </div>
  );
}

export default App;
