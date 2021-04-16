import React from 'react';
import './Posts.css';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions.js'

class Posts extends React.Component  {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props.newPost.id)
    let posts;
    if (!this.props.newPost.id) {
      posts = [...this.props.posts];
    }
    else {
      posts = [this.props.newPost, ...this.props.posts];
    }
    const postsContent = posts.map(post => {
      return (
        <div key={post.id} className='post'>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      )
    })
    return(
      <div className='post-container'>
        <h1> Posts </h1>
        {postsContent}
      </div>
    ) 
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item
})


export default connect(mapStateToProps, { fetchPosts })(Posts);