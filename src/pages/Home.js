import React from "react";
import BookCard from "../components/BookCard";
import "./Home.css";

const books = [
  { name: "Story Book", category: "Kids", price: 0, image: "/images/book1.jpg" },
  { name: "Programming Book", category: "Coding", price: 0, image: "/images/book2.jpg" },
  { name: "Sports Book", category: "Fitness", price: 0, image: "/images/book3.jpg" },
  { name: "Library Book", category: "General", price: 0, image: "/images/book4.jpg" },
  { name: "History Book", category: "General", price: 0, image: "/images/book5.jpg" },
  { name: "Gaming Book", category: "Fun", price: 0, image: "/images/book6.jpg" },
  { name: "Novel", category: "Fiction", price: 0, image: "/images/book7.jpg" },
  { name: "Business Book", category: "Business", price: 0, image: "/images/book8.jpg" },
];

export default function Home() {
  return (
    <div className="home">
      <h1 className="title">Welcome to BookStore 📚</h1>

      <div className="book-grid">
        {books.map((item, index) => (
          <BookCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
