import React, { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../reducers/bookReducer";
export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("mybooks");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("mybooks", JSON.stringify(books));
  }, [books]);
  /*
purpose of filter methed:.
filter loop through the array and check the certain condition if the condition is true it kepp the 
item in the array if the condition is false it delete the item and return 
the new array with the remaining elements
*/

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
