import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Card from "react-bootstrap/Card";
import MovesDataFor from "./MovesDataFor";
// import { Container, Row, Col } from "react-bootstrap";

// ////////////////////////////////////

class Moves extends React.Component {
  render() {
    return (
      <>
        <Row>
          <MovesDataFor movesData={this.props.movesData}></MovesDataFor>
        </Row>
      </>
    );
  }
}

// ////////////////////////////////////

export default Moves;
