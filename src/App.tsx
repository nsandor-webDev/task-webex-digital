import React, { useState } from 'react'

// Assets & styles 
import './App.scss';
import defaultAvatar from  './assets/img/test.png'

//components
import AddNewUserForm from './components/AddNewUserForm';
import ListOfUsers from './components/ListOfUsers';

function App() {
  const [users, setUsers] = useState([
      {
          id: 1,
          imgSrc: defaultAvatar,
          name: 'Norbert Sándor',
          address: 'Bodona 3'
      }
  ])

  const handleCreateUserFormSubmit = (usersName: string, usersAddress: string, usersImage: Object) => {

    const newUser = {
      id: Math.max(...users.map(s => s.id)) +1,
      imgSrc: usersImage.toString(),
      name: usersName,
      address: usersAddress
    }

    setUsers([...users, newUser])

    alert(JSON.stringify(users))
  }


  return (
    <div className="App">
      <main>
        <AddNewUserForm onCreateUserFormSubmit={handleCreateUserFormSubmit}/>
        <ListOfUsers />
      </main>
      <footer>
        <p>Made with 💙 &copy; 2021, Norbert Sándor</p>
      </footer>
    </div>
  );
}

export default App;

