import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const RegisterPage = () => {

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  return (
    <form className='register'>
        <h1>Register</h1>
        <input type="text" placeholder='username' value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)}/>
        <button>Register</button>
        <h4>Already have an account? <span><Link to='/login'>Login</Link></span></h4>
    </form>
  )
}

export default RegisterPage