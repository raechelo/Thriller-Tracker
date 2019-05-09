import React from 'react';
import { connect } from 'react-redux';

const Card = (props) => {
  const mappedMovies = props.movies.length && props.movies.map(p => {
    return <h2>{p.title}</h2>
  })
  return (
    <article>
      {mappedMovies}
    </article>
  )
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps)(Card);