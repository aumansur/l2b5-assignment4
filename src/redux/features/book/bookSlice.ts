import type { IBook } from "@/types/book";
import { createSlice } from "@reduxjs/toolkit";

// interface IInitialState {
//     data:IBook,
// }
//initial state empty object
const initialState: IBook = {
  _id: "",
  title: "",
  author: "",
  genre: "FICTION",
  isbn: "",
  copies: 0,
  available: false,
};

const bookSlice = createSlice({
  name: "book",
  initialState: initialState,

  reducers: {
    //create book
    // createBook: (state, action: PayloadAction<IBook>) => {
    //   const newBook = {
    //     ...action.payload,
    //     available: action.payload.copies > 0, // Set available based on copies
    //   };
    //   // Check if the book already exists
    //   const existingBook = state.isbn === newBook.isbn;
    //   if (existingBook) {
    //     console.error("Book with this ISBN already exists.");
    //     return state; // Return the current state without changes
    //   }
    //   // If the book does not exist, add it to the state
    //   return { ...state, ...newBook };
    // },
    //delete a book
    // deleteBook: (state, action: PayloadAction<string>) => {
    //   if (state._id === action.payload) {
    //     return initialState; // Reset to initial state if the book is deleted
    //   }
    //   return state;
    // },
  },
});

//export actions
// export const { } = bookSlice.actions;
//export reducer
export default bookSlice.reducer;
