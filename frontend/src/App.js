import React, { Component } from 'react';
import{Route, Link, Switch} from "react-router-dom";
import logo from './instagran.jpg';
import './App.css';
import Users from "./users/Users";
import axios from "axios";
import LoginUser from './users/LoginUser.js';
import NewUser from './users/NewUser.js';

const Footer = ({renderLogin, clickHandler}) => {
  console.dir("what??", clickHandler)
  var footerMessage="";
  var textlink="";
  if(renderLogin === true){
    footerMessage="Don't have an account?  ";
    textlink="Sing up";
  } else{
    footerMessage="Have an account?  ";
    textlink="Log in"
  }
  return(
    <div className="App-register">
       <br/> 
       {footerMessage}
       <a onClick={clickHandler}>
       <font color="#3897f0"> {textlink}</font> </a> 
    </div>
  )
}


class App extends Component {
  state = { usernameInput: "", passwordInput: "", message: "", renderLogin: false };
 
  renderSignUpForm = () =>{
   return (<NewUser/>);
  }
  renderLogInForm = () =>{
   return (<LoginUser/>);
  }

  handleUsernameChange = e => {
    this.setState({
      usernameInput: e.target.value
    });
  };
  
  toggleForms = () => {
   const { renderLogin } = this.state
    this.setState({renderLogin: !renderLogin})
  }

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
    }

  render() {
    console.log('STATE ==>', this.state)
    console.dir(this.toggleForms)
      const { usernameInput, passwordInput, message, renderLogin } = this.state;
    return (
      <div className="App">
      <div className="App-frontpage">
           {renderLogin ? this.renderLogInForm(): this.renderSignUpForm()}
           <Footer 
              renderLogin={this.state.renderLogin}
              clickHandler={this.toggleForms}
            />
      </div>
      </div>
    );
  }
}

export default App;


