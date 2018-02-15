import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Test from "./Users/users";
import UserFeed from "./Users/UserFeed";

const testFeed =[
    {
       user_profile_picture:{
           img :""
       },
       user_post:{
           img :""
       },
       user_name:{
           name :""
       },
       user_caption:{
           caption :""
       },
   }
]

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      searchValue: "",
    }
  }
  handleSearchBar = (e) => {
    this.setState({
      searchValue: e.target.value,
    })
  }

  renderUserFeed = () => {
    const {userPosts} = this.state
    return <UserFeed testFeed={testFeed} />;
  };

  render() {
    const { searchValue } = this.state
    return (
      <div>
        <div class="navDiv">
          <div class="container">

            <label>
              <Link to="/">
                <img class="headerImage1 " src="https://multirotor.mst.edu/wp-content/uploads/sites/19/2016/09/instaicon.png" alt="" />
              </Link> {"  "}
            </label>

            <label id="searchbox">
              <input
                type="text"
                name="search"
                placeholder="Search"
                value={searchValue}
                onChange={this.handleSearchBar}
              />
            </label>

            <label id="extend_nav">
              <Link to="/users">
                <img class="headerImage2 " src="http://www.pngall.com/wp-content/uploads/2016/04/Instagram-Heart-Transparent.png" alt="" />
              </Link> {"  "}
              <Link to="/users">
                <img class="headerImage2" src="https://images.vexels.com/media/users/3/147103/isolated/preview/e9bf9a44d83e00b1535324b0fda6e91a-instagram-profile-line-icon-by-vexels.png" alt="" />
              </Link> {"  "}
              {"  "}
            </label>
          </div>
        </div>
        <Route exact path="/" render={this.renderUserFeed} />
        <Route path="/users" component={Test} />
      </div>
    )
  }
}
export default Navbar;