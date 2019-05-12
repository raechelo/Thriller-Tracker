import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOutUser } from '../../actions';

export const Nav = (props) => {
  return (
    <header className="Header">
      <nav>
        <NavLink exact to='/' className='nav title'><h1>movie mania</h1></NavLink>
        {
          props.user.name && 
          <div>
            <NavLink exact to='/favorites' className='nav fave'>Favorites</NavLink>
            <NavLink exact to='/' className='nav' onClick={props.logOutUser}>Sign Out</NavLink>
          </div>
        }
        {
          !props.user.name &&
          <div>
            <NavLink exact to='/login' className='nav'> <i className="fas fa-skull"></i> Login</NavLink>
            <NavLink exact to='/sign-up' className='nav'><i className="fas fa-book-dead"></i> Sign Up</NavLink>
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
  logOutUser: () => dispatch(logOutUser())
})

export default connect(mapStateToProps)(Nav);