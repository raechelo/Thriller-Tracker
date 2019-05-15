 import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logInUser } from '../../actions';
import { createNewUser } from '../../thunks/createNewUser';

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      status: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const response = await this.props.createNewUser(this.state);
    response ? this.setState({status: response.status}) : this.showError();
  }

  createUser = (state) => {
    const {name, email, password} = state
    const user = {name, email, password}
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
    .then(response => {
      console.log('response ok?:', response.ok)
      console.log('response:', response)
      this.setState({status: response.status})
      response.ok ? this.props.logInUser(user) : this.showError()
    })
    .catch(error => console.log('error', error));
  }

  showError = () => {
    const errorText = document.querySelector('.error');
    errorText.style.color = '#760a0a';
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form className="user-form" onSubmit={this.handleSubmit}>
        <h2>Create Account</h2>
        <p className="error">Email has already been used</p>
        <label htmlFor="name">Name</label>
        <input onChange={ this.handleChange } name='name' type='text' id="name" className='userProp' />
        <label htmlFor="email">Email</label>
        <input onChange={ this.handleChange } name='email' type='email' id="email" className='userProp' />
        <label htmlFor="password">Password</label>
        <input onChange={ this.handleChange } name='password' type='password' id="password" className='userProp' />
        <button>Create <i className="fas fa-angle-right"></i></button>
        {this.state.status === 'success' && <Redirect to='/' />}
      </form>
    ) 
  }
}

SignUp.propTypes = {
  logInUser: PropTypes.func
}

export const mapDispatchToProps = dispatch => {
  return ({
    logInUser: (user) => dispatch(logInUser(user)),
    createNewUser: (user) => dispatch(createNewUser(user))
  })
}

export default connect(null, mapDispatchToProps)(SignUp);