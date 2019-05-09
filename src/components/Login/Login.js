import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      status: 0
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.userLogin(this.state);
  }

  userLogin = (state) => {
    const {email, password} = state
    const url = 'http://localhost:3000/api/users'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    }
    fetch(url, options)
    .then(response => this.setState({status: response.status}))
    .catch(error => console.log('error', error));
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <form className="user-form" onSubmit={this.handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input onChange={ this.handleChange } name="email" type="email" id="email" placeholder="Email" />
        <label htmlFor="password">Password</label>
        <input onChange={ this.handleChange } name="password" type="password" id="password" placeholder="Password" />
        <button>Login</button>
        {this.state.status === 200 && <Redirect to="/" />}
      </form>
    )
  }
}

export default Login;