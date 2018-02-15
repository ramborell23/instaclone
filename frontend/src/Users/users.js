import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch } from "react-router-dom";
import Post from "./UserPost";

class Test extends React.Component {
    constructor() {
        super()
        this.state = {
            userImage: '',
            userName: 'The Rock',
            post: '400',
            followers: '11M',
            following: '1,234',
            userPosts: [
                'data:image/jpeg;base64,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',
                'data:image/jpeg;base64,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',
                'data:image/jpeg;base64,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',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9BGgTva0B-Etlagcez3vpQB8jidYinCZV7aF5PM0Vz791UttQw',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsmcAnH2zkznAAn0rQfpgahVFyWzEP_0Npo-blojuzl44xS872Jg',
            ],
            followsRequest: [],
        }
    }
    post_bookmark = () => {
        return (<div >
            <label  >
                <Link to="/"  >
                    <span class="post_bookmark_text">POST{""}</span>
                </Link> {"  "}
            </label>
            <label>
                <Link to="/">
                    <span class="post_bookmark_text">SAVED</span>
                </Link> {"  "}
            </label>
        </div>)
            ;
    };
    renderUserPost = () => {
        const { userPosts } = this.state
        return <Post postArr={userPosts} />;
    };

    render() {
        const { userName, userImage, post, followers, following, userPosts } = this.state
        return (
            <div>
                <div class="user_container">
                    <div class="user_content">
                        <div>
                            <img class="profile_main_pic" src="data:image/jpeg;base64,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" alt="" />
                        </div>
                        <div>
                            <h2 class="profile_username">
                                {userName}
                            </h2>
                        </div>
                        <div class="button_div" >
                            <button class="edit_profile_button" >
                                Edit Profile
                        </button>
                        </div>
                        <div class="settings_div">
                            <label >
                                <Link to="/">
                                    <img class="edit_settings_button" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-gear-a-512.png" alt="" />
                                </Link> {"  "}
                            </label>
                        </div>
                        <div class=".pff_div">
                            <label class=".pff_div">
                                <p class="post_follow_followers">
                                    <label >
                                        {" "}{post}{" "}Post{" "}
                                    </label>
                                    <label>
                                        {" "}{followers}{" "}Followers{" "}
                                    </label>
                                    <label>
                                        {" "}{following}{" "}Following{" "}
                                    </label>
                                </p>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="post_bookmark" >
                    <Route path="/" render={this.post_bookmark} />
                </div>
                <div class="post" >
                    <Route path="/" component={this.renderUserPost} />
                </div>
            </div>
        )
    }
}


export default Test;