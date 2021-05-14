import React, { useState } from 'react'

import defaultAvatar from  '../assets/img/test.png'

import AddNewUserForm from './AddNewUserForm';
import ListOfUsers from './ListOfUsers';

interface Props {
    
}

const Home = (props: Props) => {
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

    //template
    return (
        <div>
            <AddNewUserForm 
                usersName={usersName}
                usersAddress={usersAddress}
                usersImage={usersImage}
                onInputNameChange={handleNameChange}
                onInputAddressChange={handleAddressChange}
                onInputImageChange={handleImageChange}
                onCreateUserFormSubmit={handleCreateUserFormSubmit}/>
            <ListOfUsers users={users} />
        </div>
    )
}

export default Home
