import React from 'react';
import { connect } from 'react-redux';
import Card from '../../containers/Card/Card';

const Home = () => {

  return (
    <section className='Home'><Card /></section>
  )
}

export const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps)(Home);