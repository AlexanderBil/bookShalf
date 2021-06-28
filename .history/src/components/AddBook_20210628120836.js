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
  const[bookError, setBookError] = useState('Fill in the field Book');
  const[authorError, setAuthorError] = useState('Fill in the field Author');
  const[categoryError, setCategoryError] = useState('Fill in the field Category');
  const[isbnError, setISBNError] = useState('Fill in the field ISBN');


  //стан були в input чи ні (як тільки торкнемся input, міняєм на true)
  const[bookDirty, setBookDirty] = useState(false);
  const[authorDirty, setAuthorDirty] = useState(false);
  const[categoryDirty, setCategoryDirty] = useState(false);
  const[isbnDirty, setISBNDirty] = useState(false);

// функція для зміни стану input
const bookHandler = (e) => {

}


  //функція для події blur (коли користувач залишив поле вводу)
  const blurHandler = (e) => {
    switch(e.target.name){
      case 'name': setBookDirty(true)
      break
      case 'author': setAuthorDirty(true)
      break
      case 'category': setCategoryDirty(true)
      break
      case 'isbn': setISBNDirty(true)
      break
    }
  }

    return (
      <div className = "column">
          <form className = "col s12">
            <div className="input-field col s6">
              {(bookDirty && bookError) &&  <div style={{color: 'red'}}>{bookError}</div>}
               <input onBlur = {(e) => blurHandler(e)} onChange = {(e) => handleSubmit(e)} value={book} name = "name" id="book-name" type="text" className="validate" required/>
                 <label className="active" htmlFor="first_name2">Book</label>
            </div>

            <div className="input-field col s6">
            {(authorDirty && authorError) &&  <div style={{color: 'red'}}>{authorError}</div>}
               <input onBlur = {(e) => blurHandler(e)} onChange = {(e) => handleSubmit(e)} value={author} name = "author" id="book-author" type="text" className="validate" required/>
                 <label className="active" htmlFor="first_name2">Author</label>
            </div>

            <div className="input-field col s6">
            {(categoryDirty && categoryError) &&  <div style={{color: 'red'}}>{categoryError}</div>}
               <input onBlur = {(e) => blurHandler(e)} onChange = {(e) => handleSubmit(e)} value={category} name = "category" id="book-category" type="text" className="validate" required/>
                 <label className="active" htmlFor="first_name2">Category</label>
            </div>

            <div className="input-field col s6">
            {(isbnDirty && isbnError) &&  <div style={{color: 'red'}}>{isbnError}</div>}
               <input onBlur = {(e) => blurHandler(e)} onChange = {(e) => handleSubmit(e)} value={isbn} name = "isbn" id="book-isbn" type="text" className="validate" required/>
                 <label className="active" htmlFor="first_name2">ISBN</label>
            </div>

          </form>
          <button onClick = {addbook} className = "btn add">Add Book</button>
          <button onClick = {goBack} className = "btn add right">Back</button>
       </div>
    )
  }
  export {AddBook}