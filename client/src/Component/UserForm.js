import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const UserForm = ({userData}) => {
    const {Id,Fullname, Age,  Gender, Company} = userData;

    const [name,setName] = useState(Fullname);
    const [age, setAge] = useState(Age);
    const [gender, setGender] = useState(Gender);
    const [company, setCompany] = useState(Company);
    const navigate = useNavigate()

    const updateUser = ()=>{
        axios.put(
            'http://localhost:8001/updateUser/'+Id,
            {name, age,gender, company}
        )
        .then(res=>{
            console.log(res);
            navigate("/");
        }).catch(error=>console.log(error))
    }

    const addUser =()=>{
        axios.post(
            'http://localhost:8001/addUser',
            {name, age,gender, company}
        )
        .then(res=>{
            console.log(res);
            navigate("/");
        }).catch(error=>console.log(error))
    }

    const handleSubmit = ()=>{
        if(Id) updateUser()
        else addUser() 
    }


    useEffect(()=>{
        // debugger
        console.log(userData)
    },[userData])
    useEffect(()=>{
        console.log(name, age, gender, company)
    },[name, age, gender, company])

    return (
        <div>
            <div className='mt-5 row'>
                <div className="col-4 mb-3">
                    <label htmlFor="UserFormName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="UserFormName" placeholder="John Rogers" 
                    value={name}
                    onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="col-4 mb-3">
                    <label htmlFor="UserFormAge" className="form-label">Age</label>
                    <input type="number" className="form-control" id="UserFormAge" placeholder="30"
                    value={age}
                        onChange={(e) => { setAge(e.target.value) }} />
                </div>
                <div className="col-4 mb-3">
                    <label htmlFor="UserFormGender" className="form-label">Gender</label>
                    <select class="form-select" aria-label="Default select example" id="UserFormGender"
                    value={gender}
                        onChange={(e) => { setGender(e.target.value) }} >
                        <option selected disabled value=''>--select--</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="col-8 mb-3">
                    <label htmlFor="UserFormCompany" className="form-label" >Company</label>
                    <input type="text" className="form-control" id="UserFormCompany"
                    value={company} onChange={(e) => { setCompany(e.target.value) }} />
                </div>
            </div>
            <div className='row '>
                <div className=" mb-3 text-end ">
                    <button type="button" className="btn btn-success" onClick={() => handleSubmit()}>Submit</button>
                </div>
            </div>

        </div>
    )
}

export default UserForm