import { Redirect } from "react-router";
import axios from "axios";
import React, { Component } from 'react';

class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
    message: "",
    loggedIn: false
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitForm = e => {
    e.preventDefault();
    const user = { 
      username: this.state.username,
      password: this.state.password
    }
  
    axios
      .post("/login", user)
      .then(res => {
        this.props.setUser(res.data.user);
      })
      .catch(err => {
        this.setState({
          usernameInput: "",
          passwordInput: "",
          message: "username/password not found"
        });
      });
      
  };

  render() {
    const { username, password, message, loggedIn } = this.state;
    console.log('LOGIN FORM STATE', this.state)
    return (
        <div className="App-newUser">
        <img src="https://image.ibb.co/mFYeqn/instagran.jpg" alt="instagran logo" /> <br/>
        <form onSubmit={this.submitForm}>
          <input type="text" 
            name="username" 
            placeholder="Username"
            className="formItems"
            value={username}
            onChange={this.handleInput} />
          <br />
          <input 
            type="password"
            name="password"
            placeholder="Password"
            className="formItems"
            value={password}
            onChange={this.handleInput} />
          <br />
          <input type="submit" value="Log in" id="signUpButton" />
        </form>
        </div>
    );
  }
}

export default LoginForm;