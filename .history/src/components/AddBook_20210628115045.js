import {useHistory} from 'react-router-dom';
import React, { useState } from 'react';

function AddBook(props){

  const {handleSubmit, addbook} = props;
  const {goBack} = useHistory();
  
  // заносим значення з input
  const [book, setBook] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [isbn, setISBN] = useState('');

  // стан, який відображає помилку
  const[bookError, setBookError] = useState('fill in the field Book');
  const[authorError, setAuthorError] = useState('fill in the field Author');
  const[categoryError, setCategoryError] = useState('fill in the field Category');
  const[isbnError, setISBNError] = useState('fill in the field ISBN');


  //стан були в input чи ні (як тільки торкнемся input, міняєм на true)
  const[bookDirty, setBookDirty] = useState(false);
  const[authorDirty, setAuthorDirty] = useState(false);
  const[categoryDirty, setCategoryDirty] = useState(false);
  const[isbnDirty, setISBNDirty] = useState(false);


    return (
      <div className = "column">
          <form className = "col s12">
            <div className="input-field col s6">
              {(bookDirty && bookError) &&  <div style={{color: 'red'}}>{bookError}</div>}
               <input onChange = {(e) => handleSubmit(e)} defaultValue="" name = "name" id="book-name" type="text" className="validate" required/>
                 <label className="active" htmlFor="first_name2">Book</label>
            </div>

            <div className="input-field col s6">
            {(authorDirty && authorError) &&  <div style={{color: 'red'}}>{authorError}</div>}
               <input onChange = {(e) => handleSubmit(e)} defaultValue="" name = "author" id="book-author" type="text" className="validate" required/>
                 <label className="active" htmlFor="first_name2">Author</label>
            </div>

            <div className="input-field col s6">
            {(categoryDirty && categoryError) &&  <div style={{color: 'red'}}>{bookError}</div>}
               <input onChange = {(e) => handleSubmit(e)} defaultValue="" name = "category" id="book-category" type="text" className="validate" required/>
                 <label className="active" htmlFor="first_name2">Category</label>
            </div>

            <div className="input-field col s6">
               <input onChange = {(e) => handleSubmit(e)} defaultValue="" name = "isbn" id="book-isbn" type="text" className="validate" required/>
                 <label className="active" htmlFor="first_name2">ISBN</label>
            </div>

          </form>
          <button onClick = {addbook} className = "btn add">Add Book</button>
          <button onClick = {goBack} className = "btn add right">Back</button>
       </div>
    )
  }
  export {AddBook}