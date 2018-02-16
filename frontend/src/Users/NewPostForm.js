import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class NewPostForm extends React.Component { 
  state = {
    imageUrl: '' 
  }

  handleNewPostSubmit = e => {
    e.preventDefault();
    axios.post('/data/newpost', this.state)
      .then(res => {
        console.log('NEW POST SUBMIT ===>', res)
        this.setState({
          imageUrl: ''
        })
      })
      .catch(err => console.log('ERROR', err))
  }

  handleInput = e => {
    this.setState({
      imageUrl: e.target.value
    })
  }
  render() {

    return(
        <div className='newpost-form'>
          <form onSubmit={this.handleNewPostSubmit}>
            <input type='url' onChange={this.handleInput} />
            <button>Submit</button>
          </form>
        </div>
    )
  }
}


export default NewPostForm;