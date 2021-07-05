import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import axios from "axios";

import Weather from "./components/Weather";

// ////////////////////////////////////

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataForCity: {},
      nameFromInput: "",
      showCard: false,
      // lab 7
      weatherData: [],
    };
  }

  getCityLocation = async (event) => {
    event.preventDefault();

    await this.setState({
      nameFromInput: event.target.cityName.value,
    });

    let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.nameFromInput}&format=json`;

    // ////////////////////////////////////////////////
    // axios.get : get the data from the url link and a copy of them in the resData
    let resData = await axios.get(url);

    console.log(resData.data[0]);

    this.setState({
      dataForCity: resData.data[0],
      // //////// to show the img (the map) after submit (buttun)
      showCard: true,
    });
    // ////////////////////////////////////////////////
    // display_name
    // lat
    // lon
    // type

    // lab 7 ///////////////////////////////////////////////////////////////

    // localhost:3010/getweatherInfo?lat=<>&&lon=<>&&searchQuery=<>
    //
    let url2 = `https://city-explorer-backend-lab7.herokuapp.com/getweatherInfo?searchQuery=${this.state.nameFromInput}`;

    let weatherCity = await axios.get(url2);
    console.log(weatherCity);
    await this.setState({
      weatherData: weatherCity.data,
    });
    console.log(this.state.weatherData);

    // ///////////////////////////////////////////////////////////////////////////
  };

  render() {
    return (
      <>
        <h1>City Explorer</h1>

        <form onSubmit={this.getCityLocation}>
          <input type="text" name="cityName" placeholder="type city name..." />

          {/* <button>Explorer!</button> */}

          <input type="submit" value="Explorer!" />
        </form>

        <Card style={{ width: "30rem" }}>
          {this.state.showCard && (
            <Card.Img
              variant="top"
              src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.dataForCity.lat},${this.state.dataForCity.lon}&zoom=13`}
              alt="{this.state.dataForCity.display_name}"
            />
          )}

          <Card.Body>
            {this.state.showCard && (
              <Card.Title>{this.state.dataForCity.display_name}</Card.Title>
            )}
            {this.state.showCard && (
              <Card.Text>
                It's a: {this.state.dataForCity.type} &nbsp;&nbsp;&nbsp;
                latitude: {this.state.dataForCity.lat}&nbsp; longitude:{" "}
                {this.state.dataForCity.lon}
              </Card.Text>
            )}
          </Card.Body>
        </Card>
        {this.state.showCard && (
          <Weather weatherData={this.state.weatherData}></Weather>
        )}
      </>
    );
  }
}

// ////////////////////////////////////

export default App;
