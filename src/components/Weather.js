import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Card from "react-bootstrap/Card";
import WeatherDay from "./WeatherDay";
// ////////////////////////////////////

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <WeatherDay weatherData={this.props.weatherData}></WeatherDay>
      </>
    );
  }
}
//   <h2>Weather</h2>
//         <p>{this.props.weatherData.city_name}</p>
// ////////////////////////////////////

export default Weather;
