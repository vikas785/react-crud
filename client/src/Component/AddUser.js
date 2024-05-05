import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import UserForm from './UserForm';

const AddUser = () => {
    const [name,setName] = useState('');
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('');
    const [company, setCompany] = useState('');
    const userData = {
        Fullname:'',
        Age:0,
        Gender:'',
        Company:''
    }

    return (
        <div>
            <div className='text-center'>AddUser</div>
            <UserForm userData={userData} />
                
        </div>

    )
}

export default AddUser