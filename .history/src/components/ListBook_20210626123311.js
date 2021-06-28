import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {AddBook} from './components/AddBook';
import {Edit} from './components/Edit'
 
function ListBook(){
    const [books, setBooks] = useState([]);
    const [booksEdit, setBooksEdit] = useState({});
    

    //заносим данні в books
    useEffect(() => {
        fetch('./db.json')
        .then(data => data.json())
        .then(data => setBooks(data))
      }, []);


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


       <Router>
      <main className = "container">
        <Switch>
          <Route exact path = '/' component = {ListBook}/>
          <Route  path = '/addbook' component = {AddBook}/>
          <Route  path = '/edit' component = {Edit}/>
        </Switch>
      </main>
    </Router>
       </div>
    )
  }
  export {ListBook}
  

  