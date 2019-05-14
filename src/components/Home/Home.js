import React from 'react';
import { connect } from 'react-redux';
import Card from '../../containers/Card/Card';

export const Home = (props) => {
  const cards = props.movies.map((m, index) => <Card key={index} m={m}/>)
  return (
    <section className='Home'>
      {cards}
    </section>
  )
}

export const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps)(Home);