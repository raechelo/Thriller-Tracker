import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
import Favorites from '../Favorites/Favorites';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import { connect } from 'react-redux';

export const ContentContainer = (props) => {
  return (
    <section className='Content-Container'>
      <Route exact path='/' component={Home} />
      <Route exact path='/favorites' component={Favorites} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/sign-up' component={SignUp} />
    </section>
  )
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps)(ContentContainer);