import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {deleteBooks,getBook} from "../../store/bookSlice"

const BooksList = ({ isloading, books }) => {
  const dispatch =useDispatch();
  const {isLogged}=useSelector((state)=>state.auth);

  const booksList =
    books.length > 0
      ? books.map((items) => (
          <li
            className="list-group-item  d-flex  justify-content-between align-items-center"
            key={items.id}
          >
            <div>{items.title}</div>
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-primary" onClick={()=>dispatch(getBook(items.id))}>
                Read
              </button>
              <button type="button" className="btn btn-danger"onClick={()=>dispatch(deleteBooks(items.id))} disabled={!isLogged}>
                Delete
              </button>
            </div>
          </li>
        ))
      : " There no book ";
  return (
    <div>
      <h2>Books List</h2>

      {isloading ? "Loading...." : <ul className="list-group">{booksList}</ul>}
    </div>
  );
};

export default BooksList;
