import React from 'react';
import './PostForm.css';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions.js'

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  
  onChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  onSubmit(event) {
    event.preventDefault();

    const postBody = {
      title: this.state.title,
      body: this.state.body,
      userId: 1,
    }
    // call action
    this.props.createPost(postBody);
  }

  render() {
    return(
      <div className='post-form'>
        <h1> Add a post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input 
              type='text' name='title' value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br />
            <textarea 
              name='body' value={this.state.body}
              onChange={this.onChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    ) 
  }
}


export default connect(null, { createPost })(PostForm);