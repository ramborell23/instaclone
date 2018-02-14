import { Redirect } from "react-router";
import axios from "axios";
import React, { Component } from 'react';
import{Route, Link, Switch} from "react-router-dom";

class LoginUser extends React.Component {
  state = {
    usernameInput: "",
    passwordInput: "",
    message: "",
    loggedIn: false
  };

  handleUsernameChange = e => {
    this.setState({
      usernameInput: e.target.value
    });
  };

  handlePasswordChange = e => {
    this.setState({
      passwordInput: e.target.value
    });
  };

  submitForm = e => {
    e.preventDefault();
    const { usernameInput, passwordInput } = this.state;

    if (usernameInput.length < 6) {
      this.setState({
        message: "Username length must be at least 6"
      });
      return;
    }
    axios
      .post("/users/login", {
        username: usernameInput,
        password: passwordInput
      })
      .then(res => {
        this.props.setUser(res.data);
        this.setState({
          loggedIn: true
        });
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
    const { usernameInput, passwordInput, message, loggedIn } = this.state;

    if (loggedIn) {
      return <Redirect to="/users" />;
    }

    return (
        <div className="App-newUser">
        <img src="https://image.ibb.co/mFYeqn/instagran.jpg" alt="instagran logo" /> <br/>
        <form onSubmit={this.submitForm}>
          <input type="text" name="userName" placeholder="Username"className="formItems"
                value={usernameInput}
                onChange={this.handleUsernameChange}
            /><br />
          <input type="password" name="password" placeholder="Password" className="formItems"
                value={passwordInput}
                onChange={this.handlePasswordChange}
            /><br />
          <input type="submit" value="Log in" id="signUpButton" />
        </form>
        </div>
    );
  }
}

export default LoginUser;
/*


      <div>
        <h1> Log In </h1>

        <form onSubmit={this.submitForm}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={usernameInput}
              onChange={this.handleUsernameChange}
            />
          </label>

          <label>
            Password:
            <input
              type="text"
              name="username"
              value={passwordInput}
              onChange={this.handlePasswordChange}
            />
          </label>

          <input type="submit" value="Submit" className="buttons"/>
        </form>
        <p>{message}</p>
      </div>

        <switch>
        <Route exact path="/" render={this.homepage} />
        <Route path="/users" component={Users} />
        <Route path="/u" component={Users} />
        </switch>        


*/