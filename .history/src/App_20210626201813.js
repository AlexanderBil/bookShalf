import {BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';

import {ListBook} from './components/ListBook';
import {AddBook} from './components/AddBook';
import {Edit} from './components/Edit'

function App() {
  const [books, setBooks] = useState([]);        // для компонента ListDook
  const [booksEdit, setBooksEdit] = useState([]) // для компонента Edit
  const [dataform, setDataform] = useState({     // дял компонента AddBook
    name: '',
    author: '',
    category: '',
    isbn: '',
    id: books.map,
  })

//заносим данні в books
useEffect(() => {
  fetch('./db.json')
  .then(data => data.json())
  .then(data => setBooks(data))
}, []);


// функція що заносить в стейт dataform, данні з форми компонента AddBook
const handleSubmit = (e) => {
  setDataform({...dataform, [e.target.name]: e.target.value })
}

// функція додавання книги для компонента AddBook
const addbook = () => {
  setBooks([...books, dataform])
}


// функція для створення редагування (по кліку на Edit заносим в стейт booksEdit книгу яка спывпадаэ з id кнопки)
  const editItem = (e) => {
   books.map(item => {
      if(item.id == e.target.id){
           setBooksEdit(item)
      }
    })
  }

// функція яка обнуляє стейт booksEdit при натисненні кнопки Back в компоненті Edit
  const deletetItem = () => {
    setBooksEdit({})
  }




  return (
    <>
    <Router>
      <main className = "container">
        <Switch>
          <Route exact path = '/' render = {() => <ListBook books = {books} editItem = {editItem} />}/>
          <Route  path = '/addbook' render = { () => <AddBook handleSubmit = {handleSubmit} addbook = {addbook} /> }/>
          <Route  path = '/edit' render = {() => <Edit booksEdit = {booksEdit} deletetItem = {deletetItem} />}/>
        </Switch>
      </main>
    </Router>
  </>
  );
}

export default App;
