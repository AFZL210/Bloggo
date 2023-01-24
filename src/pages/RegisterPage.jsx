import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const RegisterPage = () => {

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const register = async(e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:4000/register',{
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type': 'application/json'}
    })

    if(response.status !== 200) {
      alert('Registration Failed')
    }else{
      alert("Registration successful")
    }
  }

  return (
    <form className='register' onSubmit={register}>
        <h1>Register</h1>
        <input type="text" placeholder='username' value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)}/>
        <button>Register</button>
        <h4>Already have an account? <span><Link to='/login'>Login</Link></span></h4>
    </form>
  )
}

export default RegisterPage