import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Test from "./Users/users";
import UserFeed from "./Users/UserFeed";
import Nav from "./header/nav"

const testFeed = [
  {
    user_profile_picture: {
      img: ""
    },
    user_post: {
      img: ""
    },
    user_name: {
      name: ""
    },
    user_caption: {
      caption: ""
    }
  }
];


class App extends React.Component {
  
  renderUserFeed = () => {
    const { userPosts } = this.state;
    return <UserFeed testFeed={testFeed} />;
  };

  render() {
    const { searchValue } = this.state;
    return (
      <div>
        <Nav handleSearchBar ={this.handleSearchBar} searchValue={searchValue}/>
        <div>
        <Route exact path="/" render={this.renderUserFeed} />
        <Route path="/users" component={Test} />
        </div>
      </div>
    );
  }
}
export default App;
