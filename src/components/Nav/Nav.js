import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOutUser } from '../../actions';

export const Nav = (props) => {
  return (
    <header className="Header">
      <nav>
        <NavLink exact to='/' className='nav title'><h1>thriller tracker</h1></NavLink>
        {
          props.user.email && 
          <div>
            <NavLink exact to='/favorites' className='nav fave'>Favorites</NavLink>
            <NavLink exact to='/login' className='nav' onClick={() => props.logOutUser()}>Sign Out</NavLink>
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
  logOutUser: () => dispatch(logOutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);