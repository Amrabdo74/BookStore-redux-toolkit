
import { configureStore } from "@reduxjs/toolkit"
import books from "./bookSlice"
import bookId from "./bookSlice"
import auth from "./athSlice"

export default configureStore({
    reducer:{
        books,auth,bookId
    }
})