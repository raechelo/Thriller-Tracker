import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logInUser } from '../../actions';
import { fetchData } from '../../utils/api/fetchData';
 
export class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      status: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.userLogin(this.state);
  }

  userLogin = (state) => {
    const {email, password} = state;
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
    fetchData(url, options)
    .then(result => {
      this.setState({status: result.status});
      this.props.logInUser(result.data);
    })
    .catch(error => this.showError());
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
        <button>Login</button>
        {this.state.status && <Redirect to="/" />}
      </form>
    )
  }
}

Login.propTypes = {
  logInUser: PropTypes.func
}


export const mapDispatchToProps = (dispatch) => ({
  logInUser: (user) => dispatch(logInUser(user))
})

export default connect(null, mapDispatchToProps)(Login);