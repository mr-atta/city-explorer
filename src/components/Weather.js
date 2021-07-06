import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
// import axios from "axios";

// ////////////////////////////////////

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Card style={{ width: "30rem" }}>
          <Card.Body>
            {/* <Card.Title>{this.props.weatherData.city_name}</Card.Title> */}
            {this.props.weatherData.map((ele, i) => {
              return (
                <div key={i}>
                  <Card.Text>Day : {ele.date}</Card.Text>
                  <Card.Text>Description : {ele.description}</Card.Text>
                  <Card.Text>Wind speed : {ele.wind_spd}</Card.Text>
                </div>
              );
            })}
          </Card.Body>
        </Card>
      </>
    );
  }
}
//   <h2>Weather</h2>
//         <p>{this.props.weatherData.city_name}</p>
// ////////////////////////////////////

export default Weather;
