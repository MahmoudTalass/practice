import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <nav className="nav-container">
        <Link to="/" className="nav">
          Home
        </Link>
        <Link to="/Task-site" className="nav">
          Tasks Site
        </Link>
        <Link to="/Photo-site" className="nav">
          Photo Search Site
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
