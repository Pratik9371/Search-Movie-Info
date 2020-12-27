import React, { Component } from "react";
import "./App.css";
import Search from "./Components/Search.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Results from "./Components/Results";
import Result from "./Components/Result";
import MovieInfo from "./Components/MovieInfo.js";
import swal from "sweetalert";
import CircularProgress from "@material-ui/core/CircularProgress";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      movies: [],
      currentMovie: null,
      loading: false,
    };
    this.api_url = "http://www.omdbapi.com/?apikey=a90e8309";
  }

  handleInput = (e) => {
    this.setState({ searchText: e.target.value });
  };

  search = (e) => {
    e.preventDefault();
    if (this.state.searchText == "") {
      swal({
        title: "Enter a movie name",
        icon: "warning",
      });
      return;
    }
    this.setState({ loading: true });
    fetch(`${this.api_url}&s=${this.state.searchText}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response == "True") {
          this.setState({ movies: data.Search });
          this.setState({ loading: false });
        } else {
          swal({
            title: data.Error,
            icon: "error",
          });
          this.setState({ loading: false });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
      });
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

  loader = () => {
    return <CircularProgress color="secondary" />;
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
