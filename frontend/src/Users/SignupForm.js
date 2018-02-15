import axios from "axios";
import React, { Component } from 'react';
import{Route, Link, Switch} from "react-router-dom";


class SingupForm extends React.Component {
  state = { 
    username: "", 
    fullname: "",
    password: "",
    profilePicUrl: '',
    message: "" 
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitForm = e => {
    e.preventDefault();
    const { username, fullname, password, profilePicUrl, } = this.state;
    const newUser = {
      username: username,
      fullname: fullname,
      password: password,
      profilePicUrl: profilePicUrl
    }

    if (username.length < 3) {
      this.setState({
        message: "Username length must be at least 3"
      });
      return;
    }

    axios
      .post("/signup", newUser) 
      .then(res => {
        console.log(res.data);
        this.setState({
          username: "",
          password: "",
          message: "Inserted User"
        });
      })
      .catch(err => {
        console.log("error: ", err);
        this.setState({
          username: "",
          password: "",
          message: "Error inserting user"
        });
      });
  };

  render() {
    const { username, password, fullname, profilePicUrl, message } = this.state;
    console.log('SIGNUP FORM STATE', this.state)
    return (
      <div className="App-newUser">
        <img src="https://image.ibb.co/mFYeqn/instagran.jpg" alt="instagran logo" /> <br/>
        <form onSubmit={this.submitForm}>
          <input 
            type="url"
            name="profilePicUrl"
            placeholder="Profile picture url"
            value={profilePicUrl}
            onChange={this.handleInput}
            className="formItems" />
          <br />
          <input 
            type="text" 
            name="fullname" 
            placeholder="Full Name"
            value={fullname}
            onChange={this.handleInput}
            className="formItems" />
          <br/>
          <input 
            type="text" 
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


export default SingupForm;