import React from 'react';
import ReactDOM from 'react-dom';


const testFeed = [
    {
    user_profile_picture: "",
    user_post: "",
    user_name: "Jerell",
    user_caption: ""
    },
]

const styles = {
    container: {
        height: "5em",
        width: "5em",
    },
    img: {
        // height: "20em"
    },
    img2: {
        height: "350px",
        width: "350px",
    }
};


const UserFeed = ({ testFeed }) => (
    <div class="user_feed_item`">
        {testFeed.map(item => (
            <div class="feed_item_main_container">
                <div class="item_header">
                    <h1>item.username</h1>
                </div>
                <div class="item_pic">
                </div>
                <label class="comment_like_button">
                </label>
                <label class="bookmark_button">
                </label>
                <label class="number_of_likes">
                </label>
                <div class="comments_box">
                    <ul>
                        <li class="comments_item">
                        </li>
                    </ul>
                </div>
            </div>
        ))}
    </div>
);


export default UserFeed