import React, { PropTypes } from 'react';

const Post = ({ item }) => 
  <div className="post">
    <h3>{ item.title }</h3>
    <p>{ item.description }</p>
  </div>;

Post.propTypes = {
  item: PropTypes.shape().isRequired
};

export default Post;