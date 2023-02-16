import React, { useContext, useState } from 'react'
import '../App.css'
import { Link, Navigate } from 'react-router-dom'
import { UserContext } from '../UserContext';


const LoginPage = () => {

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const {setUserInfo} = useContext(UserContext)
  const [redirect,setRedirect] = useState(false)

 


  if(redirect) {
    return <Navigate to='/' />
  }

  return (
    <form className='login'>
        <h1>Login</h1>
        <input type="text" placeholder='username' value={username} onChange={e => setUsername(e.target.value)}/>
        <input type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)}/>
        <button>Login</button>
        <h4>Don't have an account? <span><Link to='/register'>Create account</Link></span></h4>
    </form>
  )
}

export default LoginPage