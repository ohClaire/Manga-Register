import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="nav-container">
      <Link className="nav-link" to="/">
        Browse Manga
      </Link>
      <Link className="nav-link" to="bookmarks">
        Bookmarks
      </Link>
    </div>
  );
};

export default NavBar;
