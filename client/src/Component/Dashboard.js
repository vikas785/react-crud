import React, { useEffect, useState } from 'react';
import axios from 'axios'



const Dashboard = () => {
    const [userList, setUserList] = useState()

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
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userList?.map((user) => {
                                return (
                                    <tr>
                                        <th scope="row">{user.id}</th>
                                        <td>{user.fullname}</td>
                                        <td>{user.age}</td>
                                        <td>{user.gender}</td>
                                        <td >
                                        <button type="button" className="btn btn-primary me-2">U</button>
                                        <button type="button" className="btn btn-danger" onClick={()=>handleDelete(user.id)}>D
                                        </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Dashboard