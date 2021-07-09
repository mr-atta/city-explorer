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

// ////////////////////////////////////

export default Weather;
