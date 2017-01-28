import React, { Component } from 'react';
import { database } from '../../utils/auth';

const Post = ({ item }) => 
  <div className="post">
    <h3>{ item.title }</h3>
    <p>{ item.description }</p>
  </div>;

class Posts extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      posts: []
    };

  }

  componentWillMount() {
    database.ref('/posts').once('value')
      .then(snapshot => {
        snapshot.forEach(post => {
          this.setState({ 
            posts: [ ...this.state.posts, post.val() ]
          });
        })
      });
  }

  post(id, item) {
    return <Post key={ id } item={ item } />
  }

  posts() {
    const { posts } = this.state;
    return posts.map((post, id) => this.post(id, post))
  }

  render() {
    return (
      <div className="posts-list">
        { this.posts() }
      </div>
    );
  }
}

export default Posts;