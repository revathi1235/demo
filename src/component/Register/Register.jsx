import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Register() {

    const [name,setName]=useState()
    const [password,setPassword]=useState()
    const [email,setEmail]=useState()
    const navigate=useNavigate()

    const handleClick=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:7000/register',{name,email,password})
        .then((res)=>{
           navigate('/login')
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div>
        <form onSubmit={handleClick}>
            <input 
            type="text" 
            placeholder='enter name'
            autoComplete='off'
            name='name'
            onChange={(e)=>setName(e.target.value)}
            />
            <input type="text"
              placeholder='email'
              name='email'
            autoComplete='off'
            onChange={(e)=>setEmail(e.target.value)}

            />
            <input type="text"   placeholder='enter password'
            autoComplete='off' name='password'  onChange={(e)=>setPassword(e.target.value)}
            />
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Register