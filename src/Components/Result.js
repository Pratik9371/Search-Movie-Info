import React, { Component } from "react";
import { Link } from "react-router-dom";

class Result extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-md-3 mb-5">
        <div className="card">
          <img src={this.props.image} style={{ height: "400px" }}></img>
          <h4>{this.props.title}</h4>
          <a
            href="#"
            onClick={() => this.props.viewMovieInfo(this.props.movieId)}
          >
            Movie details
          </a>
        </div>
      </div>
    );
  }
}

export default Result;
