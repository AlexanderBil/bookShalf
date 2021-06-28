import {BrowserRouter as Router, Route, Switch, useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';

import {ListBook} from './components/ListBook';
import {AddBook} from './components/AddBook';
import {Edit} from './components/Edit'

function App() {
  const [books, setBooks] = useState([]);        // для компонента ListBook
  const [booksEdit, setBooksEdit] = useState({}) // для компонента Edit

  // const [editForm, setEditForm] = useState({
  //   name: books.name,
  //   author: books.author,
  //   category: books.category,
  //   isbn: books.isbn,
  //   id: books.id,
  // }) // для компонента Edit(коли коригуєм поле)


  const [dataform, setDataform] = useState({     // дял компонента AddBook
    name: '',
    author: '',
    category: '',
    isbn: '',
    id: 0,
  })

//заносим данні в books
useEffect(() => {
  fetch('./db.json')
  .then(data => data.json())
  .then(data => setBooks(data))
}, []);


// функція що заносить в стейт dataform, данні з форми компонента AddBook
const handleSubmit = (e) => {
  setDataform({...dataform, [e.target.name]: e.target.value})
}

// функція що заносить в стейт editForm, данні які ми міняєм в edit
const handleEdit = (e) => {
  setBooksEdit({...booksEdit, [e.target.name]: e.target.value})
}


// функція додавання книги для компонента AddBook
const addbook = () => {
  dataform.id = books.length+1;
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

// функція яка зберігає редаговані дані
// const saveEditBook = () =>{
//   books.map (item => {
//     if(item.id == booksEdit.id){
//       setBooks([item = booksEdit])
//     }
//   })
// }

const saveEditBook = () => {
  setBooks(books.map(item => item.id != booksEdit.id ))
}

  return (
    <>
    <Router>
      <main className = "container">
        <Switch>
          <Route exact path = '/' render = {() => <ListBook books = {books} editItem = {editItem} />}/>
          <Route  path = '/addbook' render = { () => <AddBook handleSubmit = {handleSubmit} addbook = {addbook} books = {books} /> }/>
          <Route  path = '/edit' render = {() => <Edit booksEdit = {booksEdit} deletetItem = {deletetItem} handleEdit = {handleEdit} saveEditBook ={saveEditBook} />}/>
        </Switch>
      </main>
    </Router>
  </>
  );
}

export default App;
