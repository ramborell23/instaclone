import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/post.css';




const Post = ({mockPost}) => {
  return(
    <div className='post'>

    <div className='header'>
      <img src={mockPost.profilePicUrl} alt='profile pic'/>
      <p>{mockPost.username}</p>
    </div>

    <div className='post-body'>
      <img src={mockPost.imageUrl}/>
    </div>

    <div className='footer'>
      <div className='footer-buttons'>
        <img className='heart' src='http://uploads.webflow.com/56d465dcb5a882d6594616c0/57056b8d5e4bf419558b8985_Gaming-Hearts-icon.png'/>
        <img className='bubble' src='https://cdn0.iconfinder.com/data/icons/social-productivity-line-art-1/128/chat-2-128.png'/>
      </div>
      <p className='likes'>{mockPost.likes} likes</p>
      <p>{mockPost.caption}</p>

      <div className='comments'>{
        mockPost.comments.map(comment => (
          <div>
            <p>
              <span className='username'>{comment.owner}</span>{' '}
              {comment.comment}
            </p>
          </div>
        ))
      }</div>
    </div>

    </div>
  )
}

export default Post