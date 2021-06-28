import {useParams, useHistory} from 'react-router-dom';
import React, {useState, useEffect} from 'react';

import {Modal} from "./Modal"

function Edit(props){
const {booksEdit, deletetItem, handleEdit, saveEditBook} = props;
const {goBack} = useHistory();


    return (
      <div className = "column">
          <form className = "col s12">
            <div className="input-field col s6">
               <input onChange = {(e) => handleEdit(e)} defaultValue={booksEdit.name} name = "name" id="book-name" type="text" className="validate"/>
                 <label className="active" htmlFor="first_name2">Book</label>
            </div>

            <div className="input-field col s6">
               <input onChange = {(e) => handleEdit(e)} defaultValue={booksEdit.author} name = "author" id="book-author" type="text" className="validate"/>
                 <label className="active" htmlFor="first_name2">Author</label>
            </div>

            <div className="input-field col s6">
               <input onChange = {(e) => handleEdit(e)}  defaultValue={booksEdit.category} name = "category" id="book-category" type="text" className="validate"/>
                 <label className="active" htmlFor="first_name2">Category</label>
            </div>

            <div className="input-field col s6">
               <input onChange = {(e) => handleEdit(e)}  defaultValue={booksEdit.isbn} name = "isbn" id="book-isbn" type="text" className="validate"/>
                 <label className="active" htmlFor="first_name2">ISBN</label>
            </div>
          </form>
          <button data-target="modal1" onClick = {saveEditBook} className = "btn add modal-trigger">Edit</button>
          <button onClick = {() => {deletetItem(); goBack()}} className = "btn add right">Back</button>
     
          <button data-target="modal1" class="btn modal-trigger">Modal</button>


     <Modal/>
       </div>
    )
  }
  export {Edit}