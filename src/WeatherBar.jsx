import React from "react";
import WeatherCard from "./WeatherCard";
import { loadWeather } from "./api";


class WeatherBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    loadWeather().then(data => {
      this.setState({
        data: data
      });
    });
  }

  render() {
    return (
      <div>
        <div className="weather">
          {this.state.data && this.state.data.map((d, index) => <WeatherCard key={index} data={d} />)}
        </div>
      </div>
    );
  }
}

export default WeatherBar;