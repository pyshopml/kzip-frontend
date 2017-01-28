import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import createPost from './actions';

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
        <Form onSubmit={this.handleSubmit} inProgress={false} />
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  createPost: (data) => dispatch(createPost(data))
});

export default connect(null, mapDispatchToProps)(NewPost);