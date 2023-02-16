import React, {useEffect, useContext, useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext'

const Header = () => {

  const {userInfo,setUserInfo} = useContext(UserContext)
  const [username, setUsername] = useState(null)

  const logoutUser = () => {
    
  }

  return (
    <header>
      <Link to="/" className='logo'>Bloggo</Link>
      <nav>

        {username && (
          <>
            <Link to='/create'>Create new post</Link>
            <Link onClick={logoutUser}>Logout</Link>
          </>
        )}

        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  )
}

export default Header