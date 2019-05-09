import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = () => {
  return (
    <header className="Header">
      <div>
        <h1>fantastic movies</h1>
        <h2>and how to watch them</h2>
      </div>
      <nav>
        <NavLink exact to='/' className='nav'>Home</NavLink>
        <NavLink exact to='/favorites' className='nav'>Favorites</NavLink>
        <NavLink exact to='/login' className='nav'>Login</NavLink>
        <NavLink exact to='/sign-up' className='nav'>Sign Up</NavLink>
      </nav>
    </header>
  )
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(Nav);