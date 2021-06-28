import {useParams, useHistory} from 'react-router-dom';
import React, {useState} from 'react';

function Edit(props){
const {goBack} = useHistory();

const {} = props;
const changInfo = () => {

}

    return (
      <div className = "column">
          <form className = "col s12">
            <div className="input-field col s6">
               <input onChange = {(e) => changInfo(e)} defaultValue="Call of Cthulhu" name = "name" id="book-name" type="text" className="validate"/>
                 <label className="active" htmlFor="first_name2">Book</label>
            </div>

            <div className="input-field col s6">
               <input onChange = {(e) => changInfo(e)} defaultValue="Lovecraft" name = "author" id="book-author" type="text" className="validate"/>
                 <label className="active" htmlFor="first_name2">Author</label>
            </div>

            <div className="input-field col s6">
               <input onChange = {(e) => changInfo(e)} defaultValue="Horror" name = "category" id="book-category" type="text" className="validate"/>
                 <label className="active" htmlFor="first_name2">Category</label>
            </div>

            <div className="input-field col s6">
               <input onChange = {(e) => changInfo(e)} defaultValue="978-3-16-148410-0" name = "isbn" id="book-isbn" type="text" className="validate"/>
                 <label className="active" htmlFor="first_name2">ISBN</label>
            </div>
          </form>
          <button  className = "btn add">Edit</button>
          <button onClick = {goBack} className = "btn add right">Back</button>
     
       </div>
    )
  }
  export {Edit}