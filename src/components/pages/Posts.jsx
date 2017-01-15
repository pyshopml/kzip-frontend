import React, { Component } from 'react';
import { database } from '../../utils/auth';

class Posts extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      posts: []
    }
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
