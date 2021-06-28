import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
 
function ListBook(props){

  const {books, editItem} = props;
  const [booksList, setBooksList] = useState([]);

// кладем в стейт booksList, книгі
  useEffect(() => {
    setBooksList(books)
  });


   // функція видалення книги
  const removeItem = (id) => {
    // setBooksList(booksList.filter(item => item.id != e.target.id))
    booksList.filter(item => (item.id != id) ? booksList : console.log(false))
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
          
          {booksList.map(item => 
             <tbody key = {item.id} >
                <tr >
                  <td>{item.name}</td>
                  <td>{item.author}</td>
                  <td>{item.category}</td>
                  <td>{item.isbn}</td>
                  <button onClick = {() => removeItem(item.id)} className = "btn" id = {item.id}>Delete</button>
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
  

  