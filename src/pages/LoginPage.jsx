import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const LoginPage = () => {

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const login = async (e) => {
    e.preventDefault();
    
    fetch('http://localhost:4000/login',{
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type': 'application/json'},
      credentials: 'include'
    })
  }

  return (
    <form className='login' onSubmit={login}>
        <h1>Login</h1>
        <input type="text" placeholder='username' value={username} onChange={e => setUsername(e.target.value)}/>
        <input type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)}/>
        <button>Login</button>
        <h4>Don't have an account? <span><Link to='/register'>Create account</Link></span></h4>
    </form>
  )
}

export default LoginPage