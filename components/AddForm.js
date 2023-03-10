import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { insertBooks } from "../store/bookSlice";

const Addform = () => {
  const {isLogged}=useSelector((state)=>state.auth);
 const dispatch =useDispatch();
 const title = useRef(null);
 const year = useRef(null);
 const discription = useRef(null);
 const handleSubmit =(e)=>{
   e.preventDefault();
   const data ={
     title:title.current.value,
     year:year.current.value,
     discription:discription.current.value
    }
    console.log(data.title, data.year, data.discription);
  dispatch(insertBooks(data));
  title.current.value="";
  year.current.value="";
  discription.current.value="";
}
  return (
    <div className='row'>
      <div className='col-6 offset-3 mt-3'>
        <h2>Insert Book</h2>
        <form  onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input type='text' className='form-control' id='title' required ref={title}/>
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input type='number' className='form-control' id='price' required  ref={year}/>
          </div>
          <div className='form-group'>
            <label htmlFor='Description'>Description</label>
            <textarea ref={discription}
              className='form-control'
              id='Description'
              rows='3'
              required
            ></textarea>
          </div>
          <button type='submit' className='btn btn-primary' disabled={!isLogged}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;
