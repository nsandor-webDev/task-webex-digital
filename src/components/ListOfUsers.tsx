import React, { useState } from 'react'

// default image
import defaultAvatar from  '../assets/img/test.png'
interface Props {
    
}

const ListOfUsers = (props: Props) => {
    const [users, setUsers] = useState([
        {
            id: 1,
            imgSrc: defaultAvatar,
            name: 'Norbert Sándor',
            address: 'Bodona 3'
        }
    ])


    return (
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
    )
}

export default ListOfUsers
