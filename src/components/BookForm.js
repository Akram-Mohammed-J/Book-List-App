import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const BookForm = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const { addBook } = useContext(BookContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle("");
    setAuthor("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder="Add Title"
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          value={author}
          placeholder="Add Author"
          required
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <input type="submit" value="Add Book" />
      </form>
    </div>
  );
};

export default BookForm;
