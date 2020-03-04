import React from 'react';
import WeatherBar from './WeatherBar';
import WeatherSearch from './WeatherSearch';
import './App.css';
import './weathers.css';

function App() {

  return (
    <div className="App-header">
      <h2 className="title">Clima <span>Mendoza</span></h2>
      <WeatherBar />
      <WeatherSearch />
    </div>
  );
}

export default App;
