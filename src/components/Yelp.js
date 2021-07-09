import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

// ////////////////////////////////////

class Yelp extends React.Component {
  render() {
    return (
      <>
        {this.props.yelpData.map((ele, i) => {
          return (
            <div key={i}>
              <Card style={{ width: "20rem" }}>
                <Card.Img variant="top" src={ele.image_url} alt={ele.name} />
                <Card.Body>
                  <Card.Title>{ele.name}</Card.Title>
                  <Card.Text>{ele.rating}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </>
    );
  }
}

// ////////////////////////////////////

export default Yelp;
