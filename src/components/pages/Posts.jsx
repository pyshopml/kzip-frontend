import React, { Component } from 'react';
import { database } from '../../utils/auth';

class Posts extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      posts: []
    }
  }

  allPosts() {
    const ref = database.ref('/posts');
    const result = [];
    ref.on('value', (vals) => {
      console.log(vals);
    });
    
  }

  render() {
    const { posts } = this.state;
    console.log(posts);

    return (
      <div>
        <h2>Заявки</h2>
      </div>
    );
  }
}

export default Posts;
