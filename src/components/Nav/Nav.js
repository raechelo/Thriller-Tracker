import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <header className="Header">
      <div>
        <h1>fantastic movies</h1>
        <h2>and how to watch them</h2>
      </div>
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