import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
import Favorites from '../Favorites/Favorites';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

const ContentContainer = () => {
  return (
    <section>
      <Route exact path='/' component={Home} />
      <Route exact path='/favorites' component={Favorites} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/sign-up' component={SignUp} />
    </section>
  )
}

export default ContentContainer;