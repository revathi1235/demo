import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Login() {
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate()


    const handleClick=async(e)=>{
     e.preventDefault()
     try{
     const resp=await axios.post('http://localhost:7000/login',{email,password})
     if(resp.status===200){
        console.log("resp.data.message")
        localStorage.setItem("token",resp.data.token)
        const role=resp.data.role;
        if(role ==="admin"){
            navigate('/admin')
        }else{
            navigate('/user')
        }
     }else{
        console.log(resp.data.message);
     }
     }catch(err){
        console.log(err)
     }
    }
  return (
    <div>
        <form onSubmit={handleClick}>
            <input type="text"
             placeholder='email'
             name='email'
             autoComplete='off'
             onChange={(e)=>setEmail(e.target.value)}
               />
            <input type="text" placeholder='password' 
            name='password'
            onChange={(e)=>setPassword(e.target.value)}
            autoComplete='off'

            />
              <button type='submit'> login</button>
        </form>
    </div>
  )
}

export default Login