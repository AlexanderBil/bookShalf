import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Dashboard} from './components/Dashboard';
import {AddBook} from './components/AddBook';
import {Edit} from './components/Edit'

function App() {
  return (
    <>
    <Router>
      <main className = "container">
        <Switch>
          <Route exact path = '/' component = {Dashboard}/>
          <Route  path = '/addbook' component = {AddBook}/>
          <Route  path = '/edit' component = {Edit}/>
        </Switch>
      </main>
    </Router>
  </>
  );
}

export default App;
