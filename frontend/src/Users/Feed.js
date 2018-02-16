import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/feed.css';

import Post from './Post';
import NewPostForm from './NewPostForm';

const mockPost = { 
  profilePicUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-6sefGJWXQiLpBhNsAIWVHG8u1z9mz18NRUC7MPo_ULkGqfl',
  username: 'adam123',
  imageUrl: 'https://cdn.nba.net/nba-drupal-prod/styles/landscape/s3/2017-01/USATSI_9833898.jpg?itok=NKvWQd8A',
  likes: 2300,
  comments: [
    {owner: 'adam123', comment:'Wonderful place'},//The caption for the post turned out to be just a comment in one's own post
    {owner: 'ttyBrown', comment:'I agree'},
    {owner: 'blah_blawww', comment:'blah blah blah'},
    {owner: 'missProud', comment:'I hate you'},
  ]
}



class Feed extends React.Component { 
  state = {
    feed: []
  }

  render() {
    return(
      <div className="user_feed_item">
        <NewPostForm/>
        <Post mockPost={mockPost}/>
      </div>
    )
  }
}


export default Feed