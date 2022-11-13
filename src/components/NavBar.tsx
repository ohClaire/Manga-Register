import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="nav-container">
      <NavLink
        to="/"
        className="nav-link"
        style={({ isActive }) =>
          isActive
            ? {
                color: '#fff',
                background: '#7600dc',
              }
            : undefined
        }
      >
        Browse
      </NavLink>
      <NavLink
        to="bookmarks"
        className="nav-link"
        style={({ isActive }) =>
          isActive
            ? {
                color: '#fff',
                background: '#7600dc',
              }
            : undefined
        }
      >
        Bookmarks
      </NavLink>
    </div>
  );
};

export default NavBar;
