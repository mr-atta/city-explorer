import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Card from "react-bootstrap/Card";
import MovesDataFor from "./MovesDataFor";

// ////////////////////////////////////

class Moves extends React.Component {
  render() {
    return (
      <>
        <MovesDataFor movesData={this.props.movesData}></MovesDataFor>
      </>
    );
  }
}

// ////////////////////////////////////

export default Moves;
