import React, { Component } from 'react';
import{Route, Link, Switch} from "react-router-dom";
import logo from './instagran.jpg';
import './App.css';
import Users from "./Users/Users";
import axios from "axios";

import LoginForm from './Users/LoginForm';
import SignupForm from './Users/SignupForm';
import Feed from './Users/Feed';

const Footer = ({renderLogin, clickHandler}) => {
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
  state = { 
    user: {},
    message: "", 
    renderLoginForm: false,
    loggedIn: false
  };

  toggleForms = () => {
   const { renderLoginForm } = this.state
    this.setState({renderLoginForm: !renderLoginForm})
  }
  
  setUser = (user) => {
    this.setState({ 
      user: user,
      loggedIn: true 
    })
  }

   render() {
    console.log('APP STATE ==>', this.state)
    console.dir(this.toggleForms)

    const { usernameInput, passwordInput, message, renderLoginForm, loggedIn } = this.state;
    if(loggedIn){
      return(<Feed/>)
    }

    return (
      <div className="App">
        <div className="App-frontpage">
          {renderLoginForm ? <SignupForm setUser={this.setUser}/> : <LoginForm setUser={this.setUser}/> }
          <Footer renderLogin={this.state.renderLogin} clickHandler={this.toggleForms} />
        </div>
      </div>
    );
  }
}

export default App;


