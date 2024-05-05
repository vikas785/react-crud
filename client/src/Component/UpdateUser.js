import React, { useEffect, useState } from 'react'
import UserForm from './UserForm'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const UpdateUser = () => {
  const [userData, setUserData] = useState()
  const {userId} = useParams()
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get('http://localhost:8001/'+userId)
    .then(res => {
      setUserData(res.data[0])
    })
    .catch((err)=>console.log(err))
    .finally()
  },[])



  useEffect(()=>{
    console.log(userData)
  },[userData])
  return (
    <div>
      <div className='text-center'>Update User</div>
      {userData?<UserForm userData={userData} />: 'Loading...'}
      
    </div>
  )
}

export default UpdateUser