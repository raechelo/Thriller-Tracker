import React, { Component } from 'react';
import fetchMovies from '../../api/fetchMovies';
// import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }
  componentDidMount = async () => {
    const movies = await fetchMovies()
    this.setState({ movies });
  }

  render() {
    const { movies } = this.state;
    const displayMovies = movies.length && movies.map(movie => {
      return <img src={movie.posterImage} />
    }) 
    return (
      <div className="App">
        <h1>MOVIE MANIA</h1>
        {displayMovies}
      </div>
    );
  }
}

// export const mapDispatchToProps = (dispatch) => ({})
// export const mapStateToProps = (state) => ({})

export default App;
