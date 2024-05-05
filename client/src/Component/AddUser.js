import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const [name,setName] = useState('');
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('');
    const [company, setCompany] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');

    const navigate = useNavigate()

    const handleSubmit = ()=>{
        axios.post(
            'http://localhost:8001/addUser',
            {name, age,gender, company, maritalStatus}
        )
        .then(res=>{
            console.log(res);
            navigate("/");
        }).catch(error=>console.log(error))
    }

    useEffect(()=>{
        console.log(name, age, gender, company, maritalStatus)
    },[name, age, gender, company, maritalStatus])

    return (
        <div>
            <div className='text-center'>AddUser</div>

            <div>
                <div className='mt-5 row'>
                    <div className="col-4 mb-3">
                        <label htmlFor="addUserFormName" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="addUserFormName" placeholder="John Rogers" onChange={(e)=>{setName(e.target.value)}} />
                    </div>
                    <div className="col-4 mb-3">
                        <label htmlFor="addUserFormAge" className="form-label">Age</label>
                        <input type="number" className="form-control" id="addUserFormAge" placeholder="30"
                        onChange={(e)=>{setAge(e.target.value)}} />
                    </div>
                    <div className="col-4 mb-3">
                        <label htmlFor="addUserFormGender" className="form-label">Gender</label>
                        <select class="form-select" aria-label="Default select example" id="addUserFormGender"
                        onChange={(e)=>{setGender(e.target.value)}} >
                            <option selected disabled>--select--</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="col-4 mb-3">
                        <label htmlFor="addUserFormCompany" className="form-label" >Company</label>
                        <input type="text" className="form-control" id="addUserFormCompany" onChange={(e)=>{setCompany(e.target.value)}}  />
                    </div>
                    <div className="col-4 mb-3">
                        <label htmlFor="addUserFormGenderMaritalStatus" className="form-label">Marital Status</label>
                        <select class="form-select" aria-label="Default select example" id="addUserFormGenderMaritalStatus" onChange={(e)=>{setMaritalStatus(e.target.value)}}>
                            <option selected disabled>--select--</option>
                            <option value="married">Married</option>
                            <option value="unmarried">Unmarried</option>
                        </select>
                    </div>
                    
                </div>
                <div className='row '>
                    <div className="offset-10 col-2 mb-3 ">
                        <button type="button" className="btn btn-success" onClick={()=>handleSubmit()}>Add User</button>
                    </div>
                </div>

            </div>
                
        </div>

    )
}

export default AddUser