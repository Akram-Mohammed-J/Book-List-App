import React, { createContext, useState } from "react";
import { v1 as uuid } from "uuid";
export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "name of the wind", author: "patrick authfross", id: uuid() },
    { title: "The final Empire  ", author: "Brandon Sanderson", id: uuid() },
  ]);
  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };
  /*
purpose of filter methed:.
filter loop through the array and check the certain condition if the condition is true it kepp the 
item in the array if the condition is false it delete the item and return 
the new array with the remaining elements
*/
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id != id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
