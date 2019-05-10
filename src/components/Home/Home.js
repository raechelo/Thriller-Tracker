import React from 'react';
import { connect } from 'react-redux';
import Card from '../../containers/Card/Card';

const Home = (props) => {

  return (
    <section className='Home'>
    {
      props.movies.map(m => (<Card m={m}/>))
    }
    </section>
  )
}

export const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps)(Home);