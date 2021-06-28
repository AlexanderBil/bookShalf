import {useHistory} from 'react-router-dom';
import React, {useState} from 'react';

import {Modal} from "./Modal"

function Edit(props){
const {booksEdit, deletetItem, handleEdit, saveEditBook} = props;
const {goBack} = useHistory();
const [modal, setModal] = useState(false);

const startModal = () => {
  setModal(!modal)
}

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
          <button data-target="modal1" onClick = { () => {saveEditBook(); startModal } className()} = "btn add">Edit</button>

          <button onClick = {() => {deletetItem(); goBack()}} className = "btn add right">Back</button>
     
     <Modal/>
       </div>
    )
  }
  export {Edit}