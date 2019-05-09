import React from 'react';
import { connect } from 'react-redux';

const Home = (props) => {
const movieImage = props.movies.length && props.movies.map(m => (m.title && <img src={m.posterImage} alt="poster" />))

  return (
    <section className='Home'>{movieImage}</section>
  )
}

export const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps)(Home);