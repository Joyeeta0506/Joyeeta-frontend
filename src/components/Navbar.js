import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


function Navbar() {
  const { cart } = useContext(CartContext);
  return (
    <nav className="navbar">
      <h2 className="logo">BookStore</h2>

      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>

        <Link to="/login" className="btn-nav">Login</Link>
        <Link to="/signup" className="btn-nav">Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;
