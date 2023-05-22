import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Import the CSS file

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navigation;
