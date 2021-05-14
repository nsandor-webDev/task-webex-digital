import React, { ChangeEvent, FormEvent, useState } from 'react'
interface Props {
    usersName: string,
    usersAddress: string,
    usersImage: Object,
    onInputNameChange: (usersName: string) => void
    onInputAddressChange: (usersAddress: string) => void
    onInputDescChange: (usersAddress: string) => void
    onInputImageChange: (usersImage: Object) => void
    onCreateUserFormSubmit: (usersName: string, usersAddress: string, usersImage: Object) => void
}

const AddNewUserForm = (props: Props) => {
    const {usersName, usersAddress, usersImage} = props
    
    // on submit
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        props.onCreateUserFormSubmit(usersName,usersAddress,usersImage)
    }

    // on change input - Name
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onInputNameChange(e.target.value)
    }

    // on change input - Address
    const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onInputAddressChange(e.target.value)
    }

    // on change input - Descripion
    const handleDescChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onInputDescChange(e.target.value)
    }

    // on change input file - Image
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            props.onInputImageChange(URL.createObjectURL(e.target.files[0]))
        }
    }

    // template
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
                <textarea id="description" placeholder="Popis" onChange={handleDescChange}/>
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


