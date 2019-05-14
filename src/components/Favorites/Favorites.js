import React from 'react';
import { connect } from 'react-redux';
import Card from '../../containers/Card/Card';

export const Favorites = (props) => {
  const cards = props.movies.map((m, index) => {
    if (m.favorited) {
      return <Card key={index} m={m}/>
    }
    return null;
  });
  return (
    <section className='Favorites'>
      {cards}
    </section>
  )
}

export const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps)(Favorites);