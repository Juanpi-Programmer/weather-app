import React from 'react';
import './weathers.css';

function WeatherCard(props){
    console.log(props);
    
    return (
        <div className="card">
            <div className="day">
                {props.weather.day}
            </div>
            <div className="icon">
                <i className={`wi wi-${props.weather.icon}`}></i>
            </div>
            <div className="temp">
                <span className="max">{props.weather.max}°</span>
                <span className="min">{props.weather.min}°</span>
            </div>
        </div>

    );
}

export default WeatherCard;