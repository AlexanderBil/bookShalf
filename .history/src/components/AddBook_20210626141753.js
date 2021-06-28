import {useParams, useHistory} from 'react-router-dom';

import React, {useState} from 'react';

function AddBook(props){

  const handleSubmit = 
    const {goBack} = useHistory();

    // const [dataform, setDataform] = useState({
    //     name: '',
    //     author: '',
    //     category: '',
    //     isbn: '',
    // })
 

  // заносимо в стейт dataform, данні з форми
  // const handleSubmit = (e) => {
  //     setDataform({...dataform, [e.target.name]: e.target.value })
  // }


    return (
      <div className = "column">
          <form className = "col s12">
            <div className="input-field col s6">
               <input onChange = {(e) => handleSubmit(e)} defaultValue="" name = "name" id="book-name" type="text" className="validate"/>
                 <label className="active" htmlFor="first_name2">Book</label>
            </div>

            <div className="input-field col s6">
               <input onChange = {(e) => handleSubmit(e)} defaultValue="" name = "author" id="book-author" type="text" className="validate"/>
                 <label className="active" htmlFor="first_name2">Author</label>
            </div>

            <div className="input-field col s6">
               <input onChange = {(e) => handleSubmit(e)} defaultValue="" name = "category" id="book-category" type="text" className="validate"/>
                 <label className="active" htmlFor="first_name2">Category</label>
            </div>

            <div className="input-field col s6">
               <input onChange = {(e) => handleSubmit(e)} defaultValue="" name = "isbn" id="book-isbn" type="text" className="validate"/>
                 <label className="active" htmlFor="first_name2">ISBN</label>
            </div>
          </form>
          <button className = "btn add">Add Book</button>
          <button onClick = {goBack} className = "btn add right">Back</button>
       </div>
    )
  }
  export {AddBook}