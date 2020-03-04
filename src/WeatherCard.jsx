import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './weathers.css';

function WeatherCard(props){
    console.log(props);
    
    return (
        <div className="card">
            <div className="day">
                {props.data.day}
            </div>
            <div className="icon">
                <img src={props.data.icon} alt="icono clima" className="clima-icono" />
            </div>
            <div className="temp">
                <span className="max">{props.data.max}°</span>
                <span className="min">{props.data.min}°</span>
            </div>
        </div>

    );
}

export default WeatherCard;