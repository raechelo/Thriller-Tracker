import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
import Favorites from '../Favorites/Favorites';
import Login from '../../containers/Login/Login';
import SignUp from '../../containers/SignUp/SignUp';
import { connect } from 'react-redux';
import CardDetails from '../../containers/CardDetails/CardDetails';

export const ContentContainer = (props) => {
  return (
    <section className='Content-Container'>
      <Route exact path='/' component={Home} />
      <Route exact path='/favorites' component={Favorites} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/sign-up' component={SignUp} />

      <Route path='/movies/:id' render={ ( { match } ) => {
          const { id } = match.params
          const movie = props.movies.find(m => m.id === parseInt(id))
          if (movie) {
            return <CardDetails {...movie}/>
          }
        }
      } />
    </section>
  )
}

const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps)(ContentContainer);