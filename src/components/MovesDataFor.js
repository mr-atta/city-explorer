import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

// //////////////////////////////////////////////////

class MovesDataFor extends React.Component {
  render() {
    return (
      <div>
        {this.props.movesData.map((ele, i) => {
          console.log(ele);
          return (
            <div key={i} className="move-card">
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
            </div>
          );
        })}
      </div>
    );
  }
}

export default MovesDataFor;
