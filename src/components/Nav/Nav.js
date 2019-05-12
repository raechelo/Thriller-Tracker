import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

export const Nav = (props) => {
  return (
    <header className="Header">
      {/* <div>
        <h1>movie mania</h1>
      </div> */}
      <nav>
        {
          props.user.name && 
          <div>
            <NavLink exact to='/favorites' className='nav fave'>Favorites</NavLink>
            <NavLink exact to='/' className='nav'>Sign Out</NavLink>
          </div>
        }
        <NavLink exact to='/' className='nav title'><h1>movie mania</h1></NavLink>
        {
          !props.user.name &&
          <div>
            <NavLink exact to='/login' className='nav'> <i className="fas fa-skull"></i> Login</NavLink>
            <NavLink exact to='/sign-up' className='nav'><i className="fas fa-book-dead"></i> Sign Up</NavLink>
          </div>
        }
        {/* {
          props.user.name && 
          <NavLink exact to='/' className='nav'>Sign Out</NavLink>
        } */}
      </nav>
    </header>
  )
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(Nav);