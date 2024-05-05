import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {  useNavigate, Link } from 'react-router-dom';



const Dashboard = () => {
    const [userList, setUserList] = useState()
    const navigate = useNavigate()

    const handleDelete = async (userid) =>{
        try{
            await axios.delete('http://localhost:8001/user/'+userid)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        axios.get('http://localhost:8001/')
            .then(res => setUserList(res.data))
    }, [])


    return (
        <div>
            <div>
                <div className="text-center">Dashboard</div>
                <table className="table table-bordered mt-5">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">#ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Company</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userList?.map((user) => {
                                return (
                                    <tr>
                                        <th scope="row">{user.Id}</th>
                                        <td>{user.Fullname}</td>
                                        <td>{user.Age}</td>
                                        <td>{user.Gender}</td>
                                        <td>{user.Company}</td>
                                        <td >
                                        <Link to={`update/${user.Id}`}  className="btn btn-primary me-2">Update</Link>
                                        <button type="button" className="btn btn-danger" onClick={()=>handleDelete(user.Id)}>Delete
                                        </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className='text-end pe-2'>
                <button type="button" className="btn btn-success" onClick={()=>navigate('/add')} >+ Add New User</button>
                </div>
            </div>

        </div>
    )
}

export default Dashboard