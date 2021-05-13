import React from 'react';

// Assets & styles 
import './App.scss';

//components
import AddNewUserForm from './components/AddNewUserForm';
import ListOfUsers from './components/ListOfUsers';

function App() {
  return (
    <div className="App">
      <main>
        <AddNewUserForm />
        <ListOfUsers />
      </main>
      <footer>
        <p>Made with 💙 &copy; 2021, Norbert Sándor</p>
      </footer>
    </div>
  );
}

export default App;

