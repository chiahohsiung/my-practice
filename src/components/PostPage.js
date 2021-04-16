import React from 'react';
import { Provider } from 'react-redux';


import Posts from './Posts.js'
import PostForm from './PostForm.js'
import store from '../store.js'


class PostPage extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="postpage"> 
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    ) 
  }
}

export default PostPage;