import React from 'react'
import { Route, Switch } from 'react-router-dom';

// Assets & styles 
import './App.scss';

//components
import Home from './components/Home';
import UsersPage from './components/UsersPage';

function App() {
  // template
  return (
    <div className="App">
      <main>
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/users-detail" component={UsersPage}/>
        </Switch>
      </main>
      <footer>
        <p>Made with 💙 &copy; 2021, Norbert Sándor</p>
      </footer>
    </div>
  );
}

export default App;

