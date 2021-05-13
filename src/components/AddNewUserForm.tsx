import React, { ChangeEvent, FormEvent, useState } from 'react'


interface Props {
    
}



const AddNewUserForm = (props: Props) => {
    const [users, setUsers] = useState([
        {
            id: 1,
            imgSrc: {},
            name: 'Norbert Sándor',
            address: 'Bodona 3'
        }
    ])

    const [usersName, setUsersName] = useState('');
    const [usersAddress, setUsersAddress] = useState('');
    const [usersImage, setUsersImage] = useState(Object);
    

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        const newUser = {
            id: Math.max(...users.map(s => s.id)) +1,
            imgSrc: usersImage,
            name: usersName,
            address: usersAddress
        }


        setUsers([
            ...users, newUser
        ])
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsersName(e.target.value)
    }

    const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsersAddress(e.target.value)
    }

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setUsersImage(URL.createObjectURL(e.target.files[0]))
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input id="fname" type="text" placeholder="Meno a priezvisko"  onChange={handleNameChange}/>
                    <span>Meno a priezvisko</span>
                </label> 
                <label>
                    <input id="address" type="text" placeholder="Adresa"  onChange={handleAddressChange}/>
                    <span>Adresa</span>
                </label> 
                <label>
                    <textarea id="description" placeholder="Popis"/>
                    <span>Popis</span>
                </label> 
                <label htmlFor="avatarImage" className="file-upload-btn">
                    Nahrať obrázok
                </label>
                <input type='file' name="avatarImage" id="avatarImage" onChange={handleImageChange}/>
                <input className="submit-btn" type="submit" value="Pridať používateľa" />
            </form>

            <table className="user-list">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Meno a priezvisko</th>
                        <th>Adresa</th>
                    </tr>
                </thead>
                <tbody>  
                        {users.map(user => (
                            <tr key={user.id}>
                                <td className="user-avatar"><img src={user.imgSrc.toString()} alt="Users Avatar" /></td>
                                <td>{user.name}</td>
                                <td>{user.address}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>       
    )
}

export default AddNewUserForm


