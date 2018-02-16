import React from "react";
import { Route, Link, Switch } from "react-router-dom";
// import Test from "../Users";
import UserFeed from "./Feed";

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
      <div className="navDiv">
        <div className="container">
          <label>
            <Link to="/">
              <img className="headerImage1 pic left" src="https://multirotor.mst.edu/wp-content/uploads/sites/19/2016/09/instaicon.png" alt="" />
              <img className="headerImage1 name left" src="https://buxton.com.au/static/img/instagram.svg" alt="" />
            </Link>{" "}
          </label>

          <label id="searchbox">
            <input
              type="text"
              name="search"
              placeholder="Search"
              size="30"
            />

          </label>
          <label id="extend_nav">
          <i className="headerImage2 material-icons">explore</i>
          <i className="headerImage2 material-icons">favorite_border</i>
          <Link to="/users">
          <i  className="headerImage2 material-icons right">person</i>
          </Link>
          </label>
          
        </div>
      </div>
    );
  }
}
export default Navbar;