import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
    container: {
        height: "5em",
        width:"5em",
    },
    img: {
        // height: "20em"
    },
    img2: {
        height: "350px",
        width: "350px",
    }
};


const UserFeed = ({ UserFeedArr }) => (
    <div class ="user_feed_item`">
        {UserFeedArr.map(item => (
            <div class = "feed_item_main_container">
                <div class="item_header">
                </div>
                <div class = "item_pic">
                </div>
                <div class = "comment_like_button">
                </div>
                
            
            </div>
        ))}
    </div>
); 