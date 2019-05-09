import React from 'react';
import lamp from '../../assets/Pixar-Lamp.svg';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <header className="Header">
      <div>
        <img src={lamp} />
        <h1>Movie Mania</h1>
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