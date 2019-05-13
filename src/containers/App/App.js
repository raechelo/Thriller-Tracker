import React, { Component } from 'react';
import { fetchMovies } from '../../thunks/fetchMovies';
import Nav from '../../components/Nav/Nav';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import { connect } from 'react-redux';
import key from '../../utils/apikey';

export class App extends Component {
  
  componentDidMount = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`;
    this.props.fetchMovies(url)
  }

  render() {
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
