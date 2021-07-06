import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

// ////////////////////////////////////

class Moves extends React.Component {
  render() {
    return (
      <>
        {this.props.movesData.map((ele, i) => {
          return (
            <div key={i}>
              {/* <h3>move title : {ele.title}</h3> */}
              <Card body>move title : {ele.title}.</Card>
              <Card body>move vote : {ele.vote_average}.</Card>
            </div>
          );
        })}
      </>
    );
  }
}
//   <h2>Weather</h2>
//         <p>{this.props.weatherData.city_name}</p>
// ////////////////////////////////////

export default Moves;
