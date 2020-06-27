import React from 'react';
import PropTypes from 'prop-types';

const PostsListItem = ({ frontmatter }) => {
  const { title, date, description } = frontmatter;

  return (
    <li key={title} className="mb-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <h3>{date}</h3>
      <p>{description}</p>
    </li>
  );
};

PostsListItem.propTypes = {
  frontmatter: PropTypes.object,
};

export default PostsListItem;
