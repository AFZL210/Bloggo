import React, {useEffect, useContext, useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext'

const Header = () => {

  const {userInfo,setUserInfo} = useContext(UserContext)

  useEffect(() => {
    if(userInfo!==null) {
      fetch('http://localhost:5000/user/profile', {
        credentials: 'include'
      }).then(res => {
        res.json().then(loginInfo => {
          setUserInfo(loginInfo)
        })
      })
    }
  }, [])

  const logoutUser = () => {
    fetch('http://localhost:5000/user/logout', {
      credentials: 'include',
      method: 'POST',
    })
    setUserInfo(null)
  }

  const username = userInfo?.username

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