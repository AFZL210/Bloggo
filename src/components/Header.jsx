import React, {useEffect, useContext, useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const {userInfo,setUserInfo} = useContext(UserContext)
  const navigate = useNavigate()

  const checkAuth = async() => {

    try{

      const response = await fetch(`https://test-r6ym.onrender.com/user/profile`, {
        credentials: 'include'
      })
      if(response.status === 401) setUserInfo({})
      const userData = await response.json()
      setUserInfo(userData)
      console.log(userInfo)
    } catch(err) {
      console.log(err)
      setUserInfo({})
      setTimeout(() => {
        navigate('/')
      },1000)
    }

  }


  useEffect(() => {
      checkAuth()
  }, [])


  const logoutUser = () => {
    fetch(`${process.env.REACT_APP_API_HEAD}/user/logout`, {
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