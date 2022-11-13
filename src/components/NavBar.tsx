import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="nav-container">
      <NavLink
        style={({ isActive }) =>
          isActive
            ? {
                color: '#fff',
                background: '#7600dc',
              }
            : undefined
        }
        className="nav-link"
        to="/"
      >
        Browse
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive
            ? {
                color: '#fff',
                background: '#7600dc',
              }
            : undefined
        }
        className="nav-link"
        to="bookmarks"
      >
        Bookmarks
      </NavLink>
    </div>
  );
};

export default NavBar;
