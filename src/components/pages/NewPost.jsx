import React, { Component } from 'react';
import NewPostForm from './NewPostForm';

class NewPost extends Component {
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(vals) {
    console.log(vals);
  }

  render() {
    return (
      <div className="auth-form">
        <NewPostForm onSubmit={this.handleSubmit} inProgress={false} />
      </div>
    );
  }
};

export default NewPost;