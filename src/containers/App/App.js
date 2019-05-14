import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMovies } from '../../thunks/fetchMovies';
import Nav from '../../components/Nav/Nav';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import key from '../../utils/apikey';

export class App extends Component {
  
  componentDidMount = async () => {
    if (!localStorage.length) {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`;
      this.props.fetchMovies(url) 
    }
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

App.propTypes = {
  fetchMovies: PropTypes.func
}

export const mapDispatchToProps = (dispatch) => ({
  fetchMovies: (url) => dispatch(fetchMovies(url))
});

export default connect(null, mapDispatchToProps)(App);
