import React from 'react';
import ReactDOM from 'react-dom';

const com = { "name": "Russell WestBrook", "comment": "For the Brodies" }

const commentsArr = []


const testFeed = {
    user: {
        user_profile_picture: "",
        user_post: "",
        user_name: "Jerell",
        user_caption: ""
    }
}


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
    <div class="user_feed_item">
        {testFeed.map(item => (
            <div class="feed_item_main_container">
                <div class="feed_content">

                    <div class="item_header" >
                        <img class="feed_profile_pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-6sefGJWXQiLpBhNsAIWVHG8u1z9mz18NRUC7MPo_ULkGqfl" alt="" />
                        <span> Header</span>
                    </div>
                    <img class="feed_image" src="https://cdn.nba.net/nba-drupal-prod/styles/landscape/s3/2017-01/USATSI_9833898.jpg?itok=NKvWQd8A" alt="" />
                    <label class="comment_like_button">
                        <img class="like_button " src="http://www.pngall.com/wp-content/uploads/2016/04/Instagram-Heart-Transparent.png" alt="" />
                        <img class="comment_button " src="http://www.pvhc.net/img106/ftntdfpftogtpapzbdkm.png" alt="" />
                        <label class="bookmark_button">
                        </label>
                        <label class="number_of_likes">
                        </label>

                    </label>
                    <div>
                        {com.name}{" "}{" ."}{com.comment}
                        <ul>
                            <li class="comments_item">
                                <p>"Kobe      Great GAme Tonight brodie,Kobe      Great GAme Tonight brodie,Kobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodie"</p>
                            </li>
                            <li class="comments_item">
                                <p>"Kobe      Great GAme Tonight brodie,Kobe      Great GAme Tonight brodie,Kobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodie"</p>
                            </li>
                            <li class="comments_item">
                                <p>"Kobe      Great GAme Tonight brodie,Kobe      Great GAme Tonight brodie,Kobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodie"</p>
                            </li>
                            <li class="comments_item">
                                <p>"Kobe      Great GAme Tonight brodie,Kobe      Great GAme Tonight brodie,Kobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodie"</p>
                            </li>
                            <li class="comments_item">
                                <p>"Kobe      Great GAme Tonight brodie,Kobe      Great GAme Tonight brodie,Kobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodie"</p>
                            </li>
                            <div class="comments_box">
                            </div>
                        </ul>
                    </div>
                        <textarea placeholder="Add a comment…"></textarea>
                </div>
            </div>
        ))}
        <br/>

<div class="feed_item_main_container">
                <div class="feed_content">

                    <div class="item_header" >
                        <img class="feed_profile_pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-6sefGJWXQiLpBhNsAIWVHG8u1z9mz18NRUC7MPo_ULkGqfl" alt="" />
                        <span> Header</span>
                    </div>
                    <img class="feed_image" src="https://cdn.nba.net/nba-drupal-prod/styles/landscape/s3/2017-01/USATSI_9833898.jpg?itok=NKvWQd8A" alt="" />
                    <label class="comment_like_button">
                        <img class="like_button " src="http://www.pngall.com/wp-content/uploads/2016/04/Instagram-Heart-Transparent.png" alt="" />
                        <img class="comment_button " src="http://www.pvhc.net/img106/ftntdfpftogtpapzbdkm.png" alt="" />
                        <label class="bookmark_button">
                        </label>
                        <label class="number_of_likes">
                        </label>

                    </label>
                    <div>
                        {com.name}{" "}{" ."}{com.comment}
                        <ul>
                            <li class="comments_item">
                                <p>"Kobe      Great GAme Tonight brodie,Kobe      Great GAme Tonight brodie,Kobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodie"</p>
                            </li>
                            <li class="comments_item">
                                <p>"Kobe      Great GAme Tonight brodie,Kobe      Great GAme Tonight brodie,Kobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodie"</p>
                            </li>
                            <li class="comments_item">
                                <p>"Kobe      Great GAme Tonight brodie,Kobe      Great GAme Tonight brodie,Kobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodie"</p>
                            </li>
                            <li class="comments_item">
                                <p>"Kobe      Great GAme Tonight brodie,Kobe      Great GAme Tonight brodie,Kobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodie"</p>
                            </li>
                            <li class="comments_item">
                                <p>"Kobe      Great GAme Tonight brodie,Kobe      Great GAme Tonight brodie,Kobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodieKobe      Great GAme Tonight brodie"</p>
                            </li>
                            <div class="comments_box">
                            </div>
                        </ul>
                    </div>
                        <textarea placeholder="Add a comment…"></textarea>
                </div>
            </div>
    </div>
);


export default UserFeed