import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">BookStore</h2>

      {/* Mobile Button */}
      <button className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <ul className={open ? "nav-links open" : "nav-links"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>

        <li><Link to="/login" className="btn">Login</Link></li>
        <li><Link to="/signup" className="btn">Signup</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
