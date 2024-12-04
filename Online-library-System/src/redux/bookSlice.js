import { books } from '../utils/books.json';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// --------------------- Reducer function for adding new book ---------------------
export const addNewBook = createAsyncThunk(
    'books/addNewBook',
    async (newBook) => {
        const response = await fetch('http://localhost:5000/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(newBook),
        })
        return response.json();
    }
)


// Book slice is way to organise state and reducers for 
// specific feature in our app.By combining them in a single module.

const booksSlice = createSlice({
    name: 'books',
    initialState: {
        list: books,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addNewBook.fulfilled, (state, action) => {
                state.list.push(action.payload); // Add the new book to the list
            })
            .addCase(addNewBook.rejected, (state, action) => {
                console.error("Failed to add book:", action.error.message);
            });
    }
    
})
export default booksSlice.reducer;