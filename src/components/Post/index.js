import React, { PropTypes } from 'react';

import css from './style.scss';

const Post = ({ item }) => 
  <div className={ css.post }>
    <h3>{ item.title }</h3>
    <p>{ item.description }</p>
  </div>;

Post.propTypes = {
  item: PropTypes.shape().isRequired
};

export default Post;