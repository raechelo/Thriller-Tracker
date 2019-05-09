import React, { Component } from 'react';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  // onSubmit={ () => handleSubmit() }
  render() {
    return (
      <form>
        <h2>Create Account</h2>
        <label for="name">Name</label>
        <input onChange={ this.handleChange } name='name' type='text' id="name" />
        <label for="email">Email</label>
        <input onChange={ this.handleChange } name='email' type='email' id="email" />
        <label for="password">Password</label>
        <input onChange={ this.handleChange } name='password' type='password' id="password" />
        <button>Create</button>
      </form>
    ) 
  }
}

export default SignUp;