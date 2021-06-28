import {useParams, useHistory} from 'react-router-dom';

import React, {useState} from 'react';

import {Dashboard} from './Dashboard'

function AddBook(props){
    const {goBack} = useHistory();

    const [dataform, setDataform] = useState({
        name: '',
        author: '',
        category: '',
        isbn: '',
    })
 


  const handleSubmit = (e) => {
      setDataform({...dataform, [e.target.name]: e.target.value })
  }

const add = (dataform) => {
 
}

    return (
      <div className = "column">
          <form className = "col s12">
            <div className="input-field col s6">
               <input onChange = {(e) => handleSubmit(e)} defaultValue="Call of Cthulhu" name = "name" id="book-name" type="text" className="validate"/>
                 <label className="active" htmlFor="first_name2">Book</label>
            </div>

            <div className="input-field col s6">
               <input onChange = {(e) => handleSubmit(e)} defaultValue="Lovecraft" name = "author" id="book-author" type="text" className="validate"/>
                 <label className="active" htmlFor="first_name2">Author</label>
            </div>

            <div className="input-field col s6">
               <input onChange = {(e) => handleSubmit(e)} defaultValue="Horror" name = "category" id="book-category" type="text" className="validate"/>
                 <label className="active" htmlFor="first_name2">Category</label>
            </div>

            <div className="input-field col s6">
               <input onChange = {(e) => handleSubmit(e)} defaultValue="978-3-16-148410-0" name = "isbn" id="book-isbn" type="text" className="validate"/>
                 <label className="active" htmlFor="first_name2">ISBN</label>
            </div>
          </form>
          <button onClick = {add}  className = "btn add">Add Book</button>
          <button onClick = {goBack} className = "btn add right">Back</button>
         <Dashboard add = {add}/>
       </div>
    )
  }
  export {AddBook}