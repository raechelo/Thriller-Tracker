import React, { Component } from 'react';
import { fetchData } from '../../api/fetchData';
import { key } from '../../utils/apikey';
// import PropTypes from 'prop-types';

class App extends Component {
  componentDidMount = () => {
    this.fetchMovies()
  }

  fetchMovies = async () => {
    let url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&page=${1}`;
    try {
      let allMovies = await fetchData(url);
      console.log(allMovies);
    } catch {

    }
  }

  render() {
    console.log(key);
    return (
      <div className="App">
        <h1>MOVIE MANIA</h1>
      </div>
    );
  }
}

// export const mapDispatchToProps = (dispatch) => ({})
// export const mapStateToProps = (state) => ({})

export default App;
