import React, { Component } from 'react';
import { connect } from 'react-redux'

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
        <label htmlFor="name">Name</label>
        <input onChange={ this.handleChange } name='name' type='text' id="name" />
        <label htmlFor="email">Email</label>
        <input onChange={ this.handleChange } name='email' type='email' id="email" />
        <label htmlFor="password">Password</label>
        <input onChange={ this.handleChange } name='password' type='password' id="password" />
        <button>Create</button>
      </form>
    ) 
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (name, email, password) => dispatch(createUser(name, email, password))
})

export default connect(null, mapDispatchToProps)(SignUp);