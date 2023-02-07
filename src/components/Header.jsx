import React, {useEffect, useContext } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext'

const Header = () => {

  const {userInfo,setUserInfo} = useContext(UserContext)


  useEffect(() => {
    fetch('http://localhost:4000/profile',{
      credentials: 'include'
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo)
      })
    })
  },[])

  const username = userInfo?.username
  
  function logout() {
    fetch('http://localhost:4000/logout',{
      credentials: 'include',
      method: 'POST'
    })
    setUserInfo(null)
  }


  return (
    <header>
      <Link to="/" className='logo'>Bloggo</Link>
      <nav>

        {username && (
          <>
            <Link to='/create'>Create new post</Link>
            <Link onClick={logout}>Logout</Link>
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