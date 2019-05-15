import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOutUser, clearFavoriteMovies } from '../../actions';


export const Nav = (props) => {

  const handleLogOut = () => {
    props.logOutUser();
    props.clearFavoriteMovies();
  } 

  return (
    <header className="Header">
      <nav>
        <NavLink exact to='/' className='nav title'><h1>movie mania</h1></NavLink>
        {
          props.user.email && 
          <div>
            <NavLink exact to='/favorites' className='nav fave'>Favorites</NavLink>
            <NavLink exact to='/login' className='nav' onClick={handleLogOut}>Sign Out</NavLink>
          </div>
        }
        {
          !props.user.email &&
          <div>
            <NavLink exact to='/login' className='nav'>Login</NavLink>
            <NavLink exact to='/sign-up' className='nav'>Sign Up</NavLink>
          </div>
        }
      </nav>
    </header>
  )
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  logOutUser: () => dispatch(logOutUser()),
  clearFavoriteMovies: () => dispatch(clearFavoriteMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);