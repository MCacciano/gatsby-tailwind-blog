import React from 'react';
import PropTypes from 'prop-types';

import PostsListItem from './PostsListItem';

const PostsList = ({ posts }) => {
  return (
    <ul className="grid grid-cols-1 gap-10 w-full max-w-screen-xl mx-auto px-8 mt-8">
      {posts.edges.map(({ node }, index) => (
        <PostsListItem key={index} post={node} />
      ))}
    </ul>
  );
};

PostsList.propTypes = {
  posts: PropTypes.object.isRequired,
};

export default PostsList;
