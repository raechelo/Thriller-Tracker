import React from 'react';
import { connect } from 'react-redux';
import Card from '../../containers/Card/Card';
import { Link } from 'react-router-dom';

export const Home = (props) => {

  return (
    <section className='Home'>
    {
      props.movies.map(m => (<Link to={`/movies/${m.id}`} ><Card m={m}/> </Link>))
    }
    </section>
  )
}

export const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps)(Home);