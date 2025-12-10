import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">BookStore</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/">Books</Link>
        <Link to="/">Contact</Link>
        <Link to="/">About</Link>
      </div>

      <div className="auth-buttons">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/signup" className="btn">Signup</Link>
      </div>
    </nav>
  );
}
