import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
 
const BookInfo = () => {

const {bookId} = useSelector((state)=>state.bookId)
const {books} = useSelector((state)=>state.books)
const info = books.find(obj => obj.id === bookId)
return (
    <Fragment>
    
      <h2>Book Details</h2>

    {bookId===null ?  <div className='alert alert-secondary' role='alert'>
        There is no post selected yet. Please select!
      </div>:<div>
        <p className='fst-italic'>author: {info.author}</p>
        <p className='fw-bold'>Title: {info.title}</p>
        <p className='fw-light'>Description: {info.language}</p>
        <p className='fst-italic'>Price: {info.year}</p>
      </div>}  
    </Fragment>
  );
};

export default BookInfo;
