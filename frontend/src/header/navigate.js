import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {

    render() {
      return (
        <div class="navDiv">
          <div class="container">
            <label>
              <Link to="/">
                <img
                  class="headerImage1 "
                  src="https://multirotor.mst.edu/wp-content/uploads/sites/19/2016/09/instaicon.png"
                  alt=""
                />
                <img 
                class="headerImage1 name"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
                alt=""
                />
              </Link>{" "}
              {"  "}
            </label>
            <label id="searchbox">
              <input
                type="text"
                name="search"
                placeholder="Search"
              />
            </label>
            <label id="extend_nav">
                <img
                  class="headerImage2 "
                  src="http://www.pngall.com/wp-content/uploads/2016/04/Instagram-Heart-Transparent.png"
                  alt=""
                />
              {" "}
              {"  "}
              <Link to="/users">
                <img
                  class="headerImage2"
                  src="https://images.vexels.com/media/users/3/147103/isolated/preview/e9bf9a44d83e00b1535324b0fda6e91a-instagram-profile-line-icon-by-vexels.png"
                  alt=""
                />
              </Link>{" "}
              {"  "}
              {"  "}
            </label>
          </div>
        </div>
      );
    }
  }

  export default Nav;