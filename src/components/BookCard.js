import React from "react";
import "./BookCard.css";

export default function BookCard({ item }) {
  return (
    <div className="book-card">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.category}</p>
      <p>₹{item.price}</p>
      <button className="buy-btn">Buy Now</button>
    </div>
  );
}
