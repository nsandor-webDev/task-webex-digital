import React, { ChangeEvent, FormEvent, useState } from 'react'
interface Props {
    onCreateUserFormSubmit: (usersName: string, usersAddress: string, usersImage: Object) => void
}

const AddNewUserForm = (props: Props) => {
    const [usersName, setUsersName] = useState('');
    const [usersAddress, setUsersAddress] = useState('');
    const [usersImage, setUsersImage] = useState(Object);
    
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
                
        props.onCreateUserFormSubmit(usersName,usersAddress,usersImage)

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
    )
}

export default AddNewUserForm


