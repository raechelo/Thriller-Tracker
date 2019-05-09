import React from 'react';
import { connect } from 'react-redux';

const Home = () => {
  return (
    <h2>Home</h2>
  )
}

export const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps)(Home);