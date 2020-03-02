import React from 'react';
import WeatherBar from './WeatherBar';
import './App.css';
import './weathers.css';

function App() {
  let weathers = [
    {
      day: 'Lun',
      icon: 'day-sunny-overcast',
      max: 30,
      min: 18
    },
    {
      day: 'Mar',
      icon: 'day-cloudy',
      max: 30,
      min: 18
    },
    {
      day: 'Mie',
      icon: 'day-sunny',
      max: 30,
      min: 18
    },
    {
      day: 'Jue',
      icon: 'day-sunny-overcast',
      max: 34,
      min: 22
    },
    {
      day: 'Vie',
      icon: 'day-cloudy',
      max: 32,
      min: 20
    },
    {
      day: 'Sab',
      icon: 'day-sleet',
      max: 33,
      min: 19
    },
    {
      day: 'Dom',
      icon: 'rain',
      max: 28,
      min: 17
    },
    
  ];
  return (
    <div className="App-header">
      <h2 className="title">Clima <span>Mendoza</span></h2>
      <WeatherBar weathers = {weathers} />
    </div>
  );
}

export default App;
