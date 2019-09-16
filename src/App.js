import React from 'react';
import './App.css';
import ConsoleComponet from './Components/console';
import Socketer from './Components/socketer';
import MapComponent from './Components/map';

function App() {
  return (
    <div className="App">
      <MapComponent />
      <ConsoleComponet />
      <Socketer />
    </div>
  );
}

export default App;
