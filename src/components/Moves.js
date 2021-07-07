import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

// ////////////////////////////////////

class Moves extends React.Component {
  render() {
    return (
      <>
        {this.props.movesData.map((ele, i) => {
          console.log(ele);
          return (
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={ele.poster_path} alt={ele.title} />
              {/* <img src={ele.poster_path} alt={ele.title} /> */}
              <Card.Body>
                <Card.Title>{ele.title}</Card.Title>
                <Card.Text>
                  {" "}
                  {ele.overview}, Vote:{ele.vote_average}{" "}
                </Card.Text>
              </Card.Body>
            </Card>
            // <div key={i}>
            //   {/* <h3>move title : {ele.title}</h3> */}
            //   <Card body>move title : {ele.title}.</Card>
            //   <Card body>move vote : {ele.vote_average}.</Card>
            //   <Card body>move overview : {ele.overview}</Card>
            //   <img src={ele.poster_path} alt={ele.title} />
            // </div>
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
