import React, { Component } from 'react';
import { fetchMovies } from '../../thunks/fetchMovies';
import Nav from '../../components/Nav/Nav';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import { connect } from 'react-redux';
import key from '../../utils/apikey';
// import PropTypes from 'prop-types';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }
  
  componentDidMount = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`;
    this.props.fetchMovies(url)
  }

  render() {
    // const { movies } = this.state;
    // const displayMovies = movies.length && movies.map(movie => {
    //   return <img src={movie.posterImage} />
    // }) 
    return (
      <div className="App">
        <Nav />
        <ContentContainer />
      </div>
    );
  }
}


export const mapDispatchToProps = (dispatch) => ({
  fetchMovies: (url) => dispatch(fetchMovies(url))
});

export default connect(null, mapDispatchToProps)(App);
