import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <h1>Movie Mania</h1>
      <nav>
        <NavLink to='/' className='nav'>Home</NavLink>
        <NavLink to='/favorites' className='nav'>Favorites</NavLink>
        <NavLink to='/login' className='nav'>Login</NavLink>
        <NavLink to='/sign-up' className='nav'>Sign Up</NavLink>
      </nav>
    </header>
  )
}

export default Nav