import React from 'react'
import { Link } from 'react-router-dom';
interface Props {
    users: {
        id: number,
        imgSrc: string,
        name: string,
        address: string,
        desc: string,
        timestamp: Date
    }[]
}

const ListOfUsers = (props: Props) => {
    const { users } = props

    const sorted = users.sort((d1, d2) => new Date(d2.timestamp).getTime() - new Date(d1.timestamp).getTime());

    //template
    return (
        <table className="user-list">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Meno a priezvisko</th>
                    <th>Adresa</th>
                    <th>Detail</th>
                </tr>
            </thead>
            <tbody>  
                   {sorted.map(user => (
                      
                            <tr key={user.id}>
                                <td className="user-avatar"><img src={user.imgSrc.toString()} alt="Users Avatar" /></td>
                                <td>{user.name}</td>
                                <td>{user.address}</td>
                                <td> <Link to={{ 
                                        pathname: "/users-detail", 
                                        state: user }}> Viac info</Link>
                                </td>
                            </tr>
                    ))}
            </tbody>
        </table>
    )
}

export default ListOfUsers
