import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <h2>BookStore</h2>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/books">Books</a>
          <a href="/contact">Contact</a>
          <a href="/about">About</a>
        </div>

        <div className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <a href="/">Home</a>
        <a href="/books">Books</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
      </div>
    </>
  );
}

export default Navbar;
