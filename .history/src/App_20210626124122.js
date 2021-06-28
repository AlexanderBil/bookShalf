import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {useState, useEffect} from 'react';

import {ListBook} from './components/ListBook';
import {AddBook} from './components/AddBook';
import {Edit} from './components/Edit'

function App() {
  const [books, setBooks] = useState([]);

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
          <Route exact path = '/' render = {() => <ListBook>}/>
          <Route  path = '/addbook' component = {AddBook}/>
          <Route  path = '/edit' component = {Edit}/>
        </Switch>
      </main>
    </Router>
  </>
  );
}

export default App;
