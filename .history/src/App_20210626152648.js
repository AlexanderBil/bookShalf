import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {useState, useEffect} from 'react';

import {ListBook} from './components/ListBook';
import {AddBook} from './components/AddBook';
import {Edit} from './components/Edit'

function App() {
  const [books, setBooks] = useState([]);
  const[booksList, setBooksList] = useState([])
  const [dataform, setDataform] = useState({
    name: '',
    author: '',
    category: '',
    isbn: '',
  })


// функція що заносить в стейт dataform, данні з форми компонента AddBook
const handleSubmit = (e) => {
  setDataform({...dataform, [e.target.name]: e.target.value })
}

// функція додавання книги
const addbook = () => {
  setBooks([...books, dataform])
}


// функція для створення редагування (по кліку на Edit заносим в booksEdit певну книгу)
  const editItem = (e) => {
    fetch('./db.json')
    .then(data => data.json())
    .then(data => data.map(item => {
      if(item.id == e.target.id){
           setBooksList({item})
            // console.log(item);
      }
    }))
  }


//заносим данні в books
useEffect(() => {
  fetch('./db.json')
  .then(data => data.json())
  .then(data => setBooks(data))
}, []);

  return (
    <>
    <Router>
      <main className = "container">
        <Switch>
          <Route exact path = '/' render = {() => <ListBook books = {books} editItem = {editItem} />}/>
          <Route  path = '/addbook' render = { () => <AddBook handleSubmit = {handleSubmit} addbook = {addbook} /> }/>
          <Route  path = '/edit' component = {Edit}/>
        </Switch>
      </main>
    </Router>
  </>
  );
}

export default App;
