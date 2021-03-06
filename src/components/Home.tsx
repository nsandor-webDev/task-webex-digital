import React, { useState } from 'react'

import defaultAvatar from  '../assets/img/test.png'

import AddNewUserForm from './AddNewUserForm';
import ListOfUsers from './ListOfUsers';

interface Props {
    
}

const Home = (props: Props) => {
    var now = new Date(),
        date = now.getDate() + '.' + (now.getMonth() + 1) + '.' + now.getFullYear() + ' / ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

    // state -> form
    const [usersName, setUsersName] = useState('');
    const [usersAddress, setUsersAddress] = useState('');
    const [usersDesc, setUsersDesc] = useState('');
    const [usersImage, setUsersImage] = useState(Object);
    const [timestamp] = useState(Date);

    // state -> users + default user
    const [users, setUsers] = useState([
        {
            id: 1,
            imgSrc: defaultAvatar,
            name: 'Norbert Sándor',
            address: 'Bodona 3',
            desc: 'Testovací používateľ',
            timestamp: now
        }
    ])

    // On submit form
    const handleCreateUserFormSubmit = (usersName: string, usersAddress: string, usersImage: Object) => {
        var now = new Date()

        // new user
        const newUser = {
            id: Math.max(...users.map(s => s.id)) +1,
            imgSrc: usersImage.toString(),
            name: usersName,
            address: usersAddress,
            desc: usersDesc,
            timestamp: now
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

    // change INPUT DESCRIPTION 
    const handleDescChange = (data: string) => {
        setUsersDesc(data)
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
                onInputDescChange={handleDescChange}
                onInputImageChange={handleImageChange}
                onCreateUserFormSubmit={handleCreateUserFormSubmit}/>
            <ListOfUsers users={users} />
        </div>
    )
}

export default Home
