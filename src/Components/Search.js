import React, { Component } from "react";
import Results from "./Results.js";

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1 className="font-weight-light mt-3 mb-4">Search Movie Info</h1>
        <form onSubmit={this.props.search}>
          <div className="input-group mb-5">
            <input
              type="text"
              name="search-input"
              className="form-control"
              placeholder="Search any movie..."
              onChange={this.props.handleInput}
            ></input>
            <div className="input-group-append">
              <button type="submit" className="btn btn-primary">
                <i class="fa fa-search"></i> Search
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
