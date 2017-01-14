import React, { Component } from 'react';
import NewPostForm from './NewPostForm';
import { createPost } from '../../actions/postsActions.js';
import { connect } from 'react-redux';

class NewPost extends Component {
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(vals) {
    this.props.createPost(vals);
  }

  render() {
    return (
      <div className="auth-form">
        <NewPostForm onSubmit={this.handleSubmit} inProgress={false} />
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  createPost: (data) => dispatch(createPost(data))
});

export default connect(null, mapDispatchToProps)(NewPost);