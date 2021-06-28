import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {ListBook} from './components/ListBook';
import {AddBook} from './components/AddBook';
import {Edit} from './components/Edit'

function App() {
  const [books, setBooks] = useState([]);
  return (
    <>
    <Router>
      <main className = "container">
        <Switch>
          <Route exact path = '/' component = {ListBook}/>
          <Route  path = '/addbook' component = {AddBook}/>
          <Route  path = '/edit' component = {Edit}/>
        </Switch>
      </main>
    </Router>
  </>
  );
}

export default App;
