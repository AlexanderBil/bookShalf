import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
 
function ListBook(){
    const [books, setBooks] = useState([]);
    const [booksEdit, setBooksEdit] = useState(
    });
    

    useEffect(() => {
        fetch('./db.json')
        .then(data => data.json())
        .then(data => setBooks(data))

      }, []);

  const removeItem = (e) => {
  setBooks(books.filter(item => item.id != e.target.id))
  }

  const editItem = (e) => {
    fetch('./db.json')
    .then(data => data.json())
    .then(data => data.map(item => {
      if(item.id == e.target.id){
        // console.log(item);
        // setBooksEdit(item)
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
       <Link to = '/addbook'>Add Book</Link>
       </div>
    )
  }
  export {ListBook}
  

  