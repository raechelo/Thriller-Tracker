import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      status: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.createUser(this.state);
  }

  createUser = (state) => {
    const {name, email, password} = state
    const url = 'http://localhost:3000/api/users/new'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    }
    fetch(url, options)
    .then(response => this.setState({status: response.status}))
    .catch(error => console.log('error', error));
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Create Account</h2>
        <label htmlFor="name">Name</label>
        <input onChange={ this.handleChange } name='name' type='text' id="name" className='userProp' />
        <label htmlFor="email">Email</label>
        <input onChange={ this.handleChange } name='email' type='email' id="email" className='userProp' />
        <label htmlFor="password">Password</label>
        <input onChange={ this.handleChange } name='password' type='password' id="password" className='userProp' />
        <button>Create</button>
        {this.state.status === 200 && <Redirect to='/' />}
      </form>
    ) 
  }
}

export default SignUp;