import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <form className='login'>
        <h1>Login</h1>
        <input type="text" placeholder='username'/>
        <input type="password" placeholder='password' />
        <button>Login</button>
        <h4>Don't have an account? <span><Link to='/register'>Create account</Link></span></h4>
    </form>
  )
}

export default LoginPage