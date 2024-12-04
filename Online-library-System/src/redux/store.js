import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './bookSlice'; // Import the books slice reducer

const store = configureStore({
  reducer: {
    books: booksReducer, // Register the books slice reducer
  },
});

export default store;
