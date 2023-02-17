import React, { useContext, useState } from 'react'
import '../App.css'
import { Link, Navigate } from 'react-router-dom'
import { UserContext } from '../UserContext';


const LoginPage = () => {

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const {setUserInfo} = useContext(UserContext)
  const [redirect,setRedirect] = useState(false)

  const loginUser = async(e) => {
    e.preventDefault();

    if(!username || !password) alert('username or password cannot be empty')
    else{

      const newLogin = await fetch(`https://test-r6ym.onrender.com/user/login`, {
        method: 'POST',
        body: JSON.stringify({username,password}),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      })
  
      if(newLogin.status !== 200) alert('login failed')
      else {
        newLogin.json().then(userInfo => {
          setUserInfo(userInfo)
          console.log(userInfo)
          setRedirect(true)
        })
      }
    }
  }

  
  if(redirect) {
    return <Navigate to='/' />
  }

  return (
    <form className='login' onSubmit={loginUser}>
        <h1>Login</h1>
        <input type="text" placeholder='username' value={username} onChange={e => setUsername(e.target.value)}/>
        <input type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)}/>
        <button type='submit'>Login</button>
        <h4>Don't have an account? <span><Link to='/register'>Create account</Link></span></h4>
    </form>
  )
}

export default LoginPage