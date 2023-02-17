import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const RegisterPage = () => {

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const registerUser = async(e) => {
    e.preventDefault();

    if(!username || !password) alert('username or password cannot be empty')
    else{

      const newUser = await fetch(`https://test-r6ym.onrender.com/user/register`, {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: { 'Content-Type': 'application/json' }
      })
  
      if(newUser.status !== 200) alert('registration failed')
      else alert('resgistered succesfullly!')
    }
  }

  return (
    <form className='register' onSubmit={registerUser}>
        <h1>Register</h1>
        <input type="text" placeholder='username' value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)}/>
        <button type='submit'>Register</button>
        <h4>Already have an account? <span><Link to='/login'>Login</Link></span></h4>
    </form>
  )
}

export default RegisterPage