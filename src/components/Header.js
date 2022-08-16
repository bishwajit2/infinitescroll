import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="menu">
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </div>
  );
};

export default Header;
