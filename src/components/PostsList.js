import React from 'react';
import PropTypes from 'prop-types';

import PostsListItem from './PostsListItem';

const PostsList = ({ posts }) => {
  return (
    <ul>
      {posts.edges.map(({ node }) => (
        <PostsListItem frontmatter={node.frontmatter} />
      ))}
    </ul>
  );
};

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostsList;
