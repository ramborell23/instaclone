import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch } from "react-router-dom";


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

const Post = ({ postArr }) => (
    <div class ="post_pics_container">
        {postArr.map(image => (
            <label class="post_pics" style={styles.container}>
                {image ? <img style={styles.img2} alt="" src={image} /> : "loading..."}
            </label>
        ))}
    </div>
);

export default Post;
