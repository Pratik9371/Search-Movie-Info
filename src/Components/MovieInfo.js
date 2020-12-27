import React, { Component } from "react";

class MovieInfo extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { currentMovie } = this.props;
    return (
      <div className="container">
        <div className="jumbotron bg-light">
          <div className="row">
            <div className="col-md-2" onClick={this.props.closeMovieInfo}>
              <i
                className="fa fa-arrow-left mb-5 mr-1"
                style={{ cursor: "pointer" }}
              ></i>
              <span style={{ cursor: "pointer" }}>Go Back</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <img src={currentMovie.Poster}></img>
            </div>
            <div className="col-md-8 text-left">
              <h2>{currentMovie.Title}</h2>
              <ul className="list-group">
                <li className="list-group-item">
                  {" "}
                  Genre: {currentMovie.Genre}
                </li>
                <li className="list-group-item">
                  {" "}
                  Released: {currentMovie.Released}
                </li>
                <li className="list-group-item">Year: {currentMovie.Year}</li>
                <li className="list-group-item">
                  Actors: {currentMovie.Actors}
                </li>
                <li className="list-group-item">
                  {" "}
                  Langauge: {currentMovie.Language}
                </li>
                <li className="list-group-item">
                  Awards: {currentMovie.Awards}
                </li>
                <li className="list-group-item">
                  {" "}
                  Description: {currentMovie.Plot}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieInfo;
