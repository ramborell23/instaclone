import axios from "axios";
import React, { Component } from 'react';
import{Route, Link, Switch} from "react-router-dom";


class NewUser extends React.Component {
  state = { usernameInput: "", passwordInput: "", message: "" };

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

    if (usernameInput.length < 3) {
      this.setState({
        message: "Username length must be at least 3"
      });
      return;
    }

    axios
      .post("/users/new", {
        username: usernameInput,
        password: passwordInput
      })
      .then(res => {
        console.log(res.data);
        this.setState({
          usernameInput: "",
          passwordInput: "",
          message: "Inserted User"
        });
      })
      .catch(err => {
        console.log("error: ", err);
        this.setState({
          usernameInput: "",
          passwordInput: "",
          message: "Error inserting user"
        });
      });
  };

  render() {
    const { usernameInput, passwordInput, message } = this.state;
    return (
      <div className="App-newUser">
        <img src="https://image.ibb.co/mFYeqn/instagran.jpg" alt="instagran logo" /> <br/>
        <form onSubmit={this.submitForm}>
          <input type="text" name="loginEmail" placeholder="Email Address" className="formItems"/><br />
          <input type="text" name="fullName" placeholder="Full Name"className="formItems"/><br/>
          <input type="text" name="userName" placeholder="Username"className="formItems"
                        value={usernameInput}
                        onChange={this.handleUsernameChange}
          /><br />
          <input type="password" name="password" placeholder="Password" className="formItems"
                        value={passwordInput}
                        onChange={this.handlePasswordChange}
          /><br />
          <input type="submit" value="Submit" id="signUpButton" />
        </form>
        <div>
          <font color="grey"> By signing up, you agree to our <br/>
          <b>Terms & Privacy Policy.</b></font>
        </div>
      </div>
    );
  }
}


export default NewUser;
/*
        <switch>
        <Route exact path="/" render={this.homepage} />
        <Route path="/users" component={Users} />
        <Route path="/u" component={Users} />
        </switch>
        Have an account?<Link to="/users/login">Log In</Link> 

*/