import React, { Component } from 'react';
import fetchMovies from '../../api/fetchMovies';
// import PropTypes from 'prop-types';

class App extends Component {
  componentDidMount = () => {
    fetchMovies()
  }

  render() {
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
