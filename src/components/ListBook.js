import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
 
function ListBook(props){

  const {books, editItem} = props;
  const [booksList, setBooksList] = useState([]);

// кладем в стейт booksList, книги
  useEffect(() => {
    setBooksList(books)
  }, [books]);

   // функція видалення книги
  const removeItem = (e) => {
    setBooksList(booksList.filter(item => item.id != e.target.id))
  }

    return (
      <div className = 'dashboard'>  
        
        <table className = "highlight">
            <thead className = "highlight">
              <tr>
                  <th>Book title</th>
                  <th>Author name</th>
                  <th>Category</th>
                  <th>ISBN</th>
              </tr>
            </thead>
              
              {booksList.map(item => 
                <tbody key = {item.id} className = "highlight">
                    <tr >
                      <td>{item.name}</td>
                      <td>{item.author}</td>
                      <td>{item.category}</td>
                      <td>{item.isbn}</td>
                      <td><button onClick = {removeItem} className = "btn delete" id = {item.id}>Delete</button></td>
                      <td><Link to = '/edit'><button onClick = {editItem}  className = "btn edit" id = {item.id}>Edit</button></Link></td>
                    </tr> 
              </tbody>
              )}
        </table>
       <Link to = '/addbook'> <button className = "btn add">Add Book</button> </Link>
    </div>
    )
  }
  export {ListBook}
  

  