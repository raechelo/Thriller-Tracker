import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
import Favorites from '../Favorites/Favorites';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import { connect } from 'react-redux';

const ContentContainer = (props) => {
  console.log(props)
  const movieImage = props.movies.length && <img src={props.movies[0].posterImage} />;
  return (
    <section>
      <Route exact path='/' component={Home} />
      <Route exact path='/favorites' component={Favorites} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/sign-up' component={SignUp} />
      {movieImage}
    </section>
  )
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps)(ContentContainer);