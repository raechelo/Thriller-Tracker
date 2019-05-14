import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logInUser } from '../../actions';

export class Login extends Component {
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
    const {email, password} = state;
    const user = {email, password};
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
    .then(response => {
      this.setState({status: response.status})
      console.log(response.ok)
      response.ok ? this.props.logInUser(user) : this.showError();
    })
    .catch(error => console.log('error', error));
  }

  showError = () => {
    const errorText = document.querySelector('.error');
    errorText.style.color = '#760a0a';
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <form className="user-form" onSubmit={this.handleSubmit}>
        <h2>Login</h2>
        <p className="error">Email and Password do not match</p>
        <label htmlFor="email">Email</label>
        <input onChange={ this.handleChange } name="email" type="email" id="email" placeholder="Email" />
        <label htmlFor="password">Password</label>
        <input onChange={ this.handleChange } name="password" type="password" id="password" placeholder="Password" />
        <button>Login <i class="fas fa-angle-right"></i></button>
        {this.state.status === 200 && <Redirect to="/" />}
      </form>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  logInUser: (user) => dispatch(logInUser(user))
})

export default connect(null, mapDispatchToProps)(Login);