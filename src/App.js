import React, { Component } from "react";
import "./App.css";
import Search from "./Components/Search.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Results from "./Components/Results";
import Result from "./Components/Result";
import MovieInfo from "./Components/MovieInfo.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      movies: [],
      currentMovie: null,
    };
    this.api_url = "http://www.omdbapi.com/?apikey=a90e8309";
  }

  handleInput = (e) => {
    this.setState({ searchText: e.target.value });
  };

  search = (e) => {
    e.preventDefault();
    if (this.state.searchText == "") {
      return;
    }
    fetch(`${this.api_url}&s=${this.state.searchText}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response == "True") {
          this.setState({ movies: data.Search });
        } else {
          alert(data.Error);
        }
      })
      .catch(console.log);
  };

  // viewMovieInfo = id => {
  //   const filteredMovie = this.state.movies.filter(movie => movie.imdbID == id);

  //   const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;

  //   this.setState({ currentMovie: newCurrentMovie });
  // };

  viewMovieInfo = (id) => {
    fetch(`${this.api_url}&i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ currentMovie: data });
      });
  };

  closeMovieInfo = () => {
    this.setState({ currentMovie: null });
  };

  render() {
    return (
      <div className="App">
        {this.state.currentMovie == null ? (
          <div>
            <Search handleInput={this.handleInput} search={this.search} />
            <Results
              movies={this.state.movies}
              movieDetails={this.movieDetails}
              viewMovieInfo={this.viewMovieInfo}
            />
          </div>
        ) : (
          <MovieInfo
            currentMovie={this.state.currentMovie}
            closeMovieInfo={this.closeMovieInfo}
          />
        )}
      </div>
    );
  }
}

export default App;
