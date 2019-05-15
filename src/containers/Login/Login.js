import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logInUser } from '../../actions';
import { loginUser } from '../../thunks/loginUser';
import { fetchFavorites } from '../../thunks/fetchFavorites';
 
export class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      status: ''
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const result = await this.props.loginUser(this.state)
    await this.props.fetchFavorites(result.data.id);
    result ? this.setState({status: result.status}) : this.showError();

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
  logInUser: PropTypes.func,
  loginUser: PropTypes.func,
  fetchFavorites: PropTypes.func
}


export const mapDispatchToProps = (dispatch) => ({
  logInUser: (user) => dispatch(logInUser(user)),
  loginUser: (user) => dispatch(loginUser(user)),
  fetchFavorites: (user_id) => dispatch(fetchFavorites(user_id))
})

export default connect(null, mapDispatchToProps)(Login);