import {useParams, useHistory} from 'react-router-dom';
import React, {useState} from 'react';

function Edit(props){
const {booksEdit, test} = props;
const {goBack} = useHistory();


    return (
      <div className = "column">
          <form className = "col s12">
            <div className="input-field col s6">
               <input defaultValue={booksEdit.name} name = "name" id="book-name" type="text" className="validate"/>
                 <label className="active" htmlFor="first_name2">Book</label>
            </div>

            <div className="input-field col s6">
               <input defaultValue={booksEdit.author} name = "author" id="book-author" type="text" className="validate"/>
                 <label className="active" htmlFor="first_name2">Author</label>
            </div>

            <div className="input-field col s6">
               <input  defaultValue={booksEdit.category} name = "category" id="book-category" type="text" className="validate"/>
                 <label className="active" htmlFor="first_name2">Category</label>
            </div>

            <div className="input-field col s6">
               <input  defaultValue={booksEdit.isbn} name = "isbn" id="book-isbn" type="text" className="validate"/>
                 <label className="active" htmlFor="first_name2">ISBN</label>
            </div>
          </form>
          <button  className = "btn add">Edit</button>
          <button onClick = { (у)goBack} className = "btn add right">Back</button>
     
       </div>
    )
  }
  export {Edit}