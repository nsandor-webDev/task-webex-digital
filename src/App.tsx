import React, { useState } from 'react'

// Assets & styles 
import './App.scss';
import defaultAvatar from  './assets/img/test.png'

//components
import AddNewUserForm from './components/AddNewUserForm';
import ListOfUsers from './components/ListOfUsers';

function App() {
  // state -> form
  const [usersName, setUsersName] = useState('');
  const [usersAddress, setUsersAddress] = useState('');
  const [usersImage, setUsersImage] = useState(Object);

  // state -> users + default user
  const [users, setUsers] = useState([
      {
          id: 1,
          imgSrc: defaultAvatar,
          name: 'Norbert Sándor',
          address: 'Bodona 3'
      }
  ])

  // On submit form
  const handleCreateUserFormSubmit = (usersName: string, usersAddress: string, usersImage: Object) => {
    // new user
    const newUser = {
      id: Math.max(...users.map(s => s.id)) +1,
      imgSrc: usersImage.toString(),
      name: usersName,
      address: usersAddress
    }

    setUsers([...users, newUser])
  }

  // change INPUT NAME 
  const handleNameChange = (data: string) => {
    setUsersName(data)
  }
  
  // change INPUT ADDRESS 
  const handleAddressChange = (data: string) => {
    setUsersAddress(data)
  }

  // change INPUT IMAGE - FILE 
  const handleImageChange = (data: Object) => {
    setUsersImage(data)
  }

  // template
  return (
    <div className="App">
      <main>
        <AddNewUserForm 
            usersName={usersName}
            usersAddress={usersAddress}
            usersImage={usersImage}
            onInputNameChange={handleNameChange}
            onInputAddressChange={handleAddressChange}
            onInputImageChange={handleImageChange}
            onCreateUserFormSubmit={handleCreateUserFormSubmit}/>
        <ListOfUsers users={users} />
      </main>
      <footer>
        <p>Made with 💙 &copy; 2021, Norbert Sándor</p>
      </footer>
    </div>
  );
}

export default App;

