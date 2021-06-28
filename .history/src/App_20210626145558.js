import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {useState, useEffect} from 'react';

import {ListBook} from './components/ListBook';
import {AddBook} from './components/AddBook';
import {Edit} from './components/Edit'

function App() {
  const [books, setBooks] = useState([]);
  const [dataform, setDataform] = useState([
    name: '',
    author: '',
    category: '',
    isbn: '',
  ])

// функція що заносить в стейт dataform, данні з форми компонента AddBook
const handleSubmit = (e) => {
  setDataform({...dataform, [e.target.name]: e.target.value })
}

const addbook = () => {
  setBooks(...books, dataform)
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
          <Route exact path = '/' render = {() => <ListBook books = {books} dataform = {dataform}/>}/>
          <Route  path = '/addbook' render = { () => <AddBook handleSubmit = {handleSubmit} addbook = {addbook} /> }/>
          <Route  path = '/edit' component = {Edit}/>
        </Switch>
      </main>
    </Router>
  </>
  );
}

export default App;
