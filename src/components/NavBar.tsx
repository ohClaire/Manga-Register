import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

type Style = {
  color: string;
  background: string;
  paddingLeft: string;
  paddingRight: string;
};

const NavBar = () => {
  const activeStyle = {
    color: '#fff',
    background: '#7600dc',
    paddingLeft: '10px',
    paddingRight: '10px',
  };
  return (
    <div className="nav-container">
      <NavLink
        to="/"
        className="nav-link"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Browse
      </NavLink>
      <NavLink
        to="bookmarks"
        className="nav-link"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Bookmarks
      </NavLink>
    </div>
  );
};

export default NavBar;
