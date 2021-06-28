import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
 
function ListBook(props){

  const {books} = props;

  const [books, setBooks] = useState([]);
    const [booksEdit, setBooksEdit] = useState({});
    




   // функція видалення книги
  const removeItem = (e) => {
  setBooks(books.filter(item => item.id != e.target.id))
  }

  // функція для створення редагування (по кліку на Edit заносим в booksEdit певну книгу)
  const editItem = (e) => {
    fetch('./db.json')
    .then(data => data.json())
    .then(data => data.map(item => {
      if(item.id == e.target.id){
           setBooksEdit({item})
            // console.log(item);
      }
    }))
  }



    return (
        <div className = 'dashboard'>  
        
     <table className = "responsive-table">
     <thead>
          <tr>
              <th>Book title</th>
              <th>Author name</th>
              <th>Category</th>
              <th>ISBN</th>
          </tr>
        </thead>
          
          {books.map(item => 
       
             <tbody key = {item.id} >
            <tr >
              <td>{item.name}</td>
              <td>{item.author}</td>
              <td>{item.category}</td>
              <td>{item.isbn}</td>
              <button onClick = {removeItem} className = "btn" id = {item.id}>Delete</button>
              <Link to = '/edit'><button onClick = {editItem}  className = "btn" id = {item.id}>Edit</button></Link>
            </tr> 
          </tbody>
)}
     </table>

       <Link to = '/addbook'> <button className = "btn">Add Book</button> </Link>
       
       </div>
    )
  }
  export {ListBook}
  

  