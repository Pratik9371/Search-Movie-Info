import React, { Component } from "react";
import Result from "./Result";

class Results extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.movies.map((movie, i) => (
            <Result
              key={i}
              title={movie.Title}
              image={movie.Poster}
              movieId={movie.imdbID}
              viewMovieInfo={this.props.viewMovieInfo}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Results;
