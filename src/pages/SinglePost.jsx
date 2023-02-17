import './../App.css'
import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { format } from 'date-fns'
import { UserContext } from './../UserContext'

const SinglePost = () => {
   const postId = useParams().id;
   const [postData, setPostData] = useState(null);
   const { userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch(`https://test-r6ym.onrender.com/post/${postId}`)
        .then(res => {
            res.json().then(postData => {
                setPostData(postData);
            })
        })
  }, [])  


  if(!postData) return "No Post Found"

  return (
    <div className='post-container'>
        <h1>{postData.title}</h1>
            <time>{format(new Date(postData.createdAt), 'MMM d yyyy HH:mm')}</time>
            <p className='author'>by @{postData.author.username}</p>
        <div className="image">
            <img src={`https://test-r6ym.onrender.com/${postData.cover}`} alt="img" />
        </div>
        <div dangerouslySetInnerHTML={{__html:postData.content}}/>
    </div>
  )
}

export default SinglePost