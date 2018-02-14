import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios";

import NewUser from "./NewUser";
import LoginUser from "./LoginUser";


class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    // try to get user
  }
  setUser = user => {
    this.setState({ user: user });
  };

  renderLogin = () => {
    return <LoginUser setUser={this.setUser} />;
  };

  logOutUser = () => {
    axios
      .get("/users/logout")
      .then(res => {
        this.setState({
          loggedIn: false,
          user: null
        });
      })
      .catch(err => {
        this.setState({
          message: "something went wrong"
        });
      });
  };
  

  renderUserProfile = () =>{
    return(
    <div>
      Welcome {this.state.user.username}
      <br />
      you logged in for nothing, so feel free to<br/>
      <button onClick={this.logOutUser} className="buttons">Log Out</button>
    </div>
    )}

  render() {
    console.log("users: ", this.state);
    const { user } = this.state;
    return (
      <div className="App">
        {user ? this.renderUserProfile() : ""}
        <Route path="/users/new" component={NewUser} />
        <Route path="/users/login" render={this.renderLogin} />
      </div>
    );
  }
}

export default Users;
