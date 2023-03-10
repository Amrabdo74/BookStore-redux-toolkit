import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (_, thunkAPI) => {
    const {rejectWithValue}=thunkAPI
    try {
      const res = await fetch("http://localhost:9000/book");
      const data = await res.json();
      return data;
    } catch (error) {
     return rejectWithValue(error.message);
    }
  }
);
export const insertBooks = createAsyncThunk(
  "book/insertBooks",
  async (bookData, thunkAPI) => {
    const {rejectWithValue,getState}=thunkAPI;
    try {
       bookData.userName=getState().auth.name;
      const res = await fetch("http://localhost:9000/book",{
      method:'POST',
      body:JSON.stringify(bookData),
      headers:{
        'Content-Type': 'application/json; charset=utf-8'
      } 
    });
    const data = await res.json();
    return data;
    } catch (error) {
     return rejectWithValue(error.message);
    }
  }
);
export const deleteBooks = createAsyncThunk(
  "book/deleteBooks",
  async (id, thunkAPI) => {
    const {rejectWithValue}=thunkAPI;
    try {
    await fetch(`http://localhost:9000/book/${id}`,{
      method:'DELETE',
      headers:{
        'Content-Type': 'application/json; charset=utf-8'
      } 
    });
    return id;
    } catch (error) {
     return rejectWithValue(error.message);
    }
  }
);
export const getBook = createAsyncThunk(
  "book/getBook",
  async (id ,thunkAPI) => {
    const {rejectWithValue}=thunkAPI;
    try {
    await fetch(`http://localhost:9000/book/${id}`,{
      method:'GET',
      headers:{
        'Content-Type': 'application/json; charset=utf-8'
      } 
    });
    return id ;
    } catch (error) {
     return rejectWithValue(error.message);
    }
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState: {bookId:null, books: [] , isloading:false,error:null},
extraReducers: {
    [getBooks.pending]: (state, action) => {
      state.isloading=true;
      state.error=null;
      //console.log(action);
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isloading=false;
      state.books=action.payload
      //console.log(action);
    },
    [getBooks.rejected]: (state, action) => {
      state.isloading=false;
      state.error=action.payload;
      //console.log(action);
    },
    [insertBooks.pending]: (state, action) => {
      state.isloading=true;
      state.error=null;
    },
    [insertBooks.fulfilled]: (state, action) => {
      state.isloading=false;
      state.books.push(action.payload);
      //console.log(action);

    },
    [insertBooks.rejected]: (state, action) => {
      state.isloading=false;
      state.error=action.payload;

    },
    [deleteBooks.pending]: (state, action) => {
      state.isloading=true;
      state.error=null;
    },
    [deleteBooks.fulfilled]: (state, action) => {
      state.isloading=false;
      state.books=state.books.filter(el=>el.id!==action.payload)
    },
    [deleteBooks.rejected]: (state, action) => {
      state.isloading=false;
      state.error=action.payload;

    },
    [getBook.fulfilled]: (state, action) => {
      state.isloading=false;
      state.bookId=action.payload;
    },

  },
});
export default bookSlice.reducer;
