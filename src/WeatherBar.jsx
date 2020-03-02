import React from 'react';
import WeatherCard from './WeatherCard';
import './weathers.css';

const api = "1aa519799856cb357b11f7d31be7e1eb";
const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${api}`;

console.log(weatherUrl);

class WheatherBar extends React.Component{ 
    
    componentDidMount(){
        fetch(weatherUrl);
    }
    
    render(){
        return(
            <div className="weather">
                {this.props.weathers.map((w, i) => <WeatherCard weather={w} key={i} />)}      
            </div>
        );
    }
}
export default WheatherBar;