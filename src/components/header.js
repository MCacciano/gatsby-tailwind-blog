import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header className="h-16 bg-blue-600 text-white">
    <div className="flex justify-between items-center px-8 mx-auto w-full h-full max-w-screen-xl">
      <h1 className="text-2xl font-semibold font-rubik">
        <Link to="/">{siteTitle}</Link>
      </h1>
      <ul className="text-lg font-thin">
        <li>
          <Link to="/">Blog</Link>
        </li>
      </ul>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
