import './../App.css'
import React, { useEffect, useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { format } from 'date-fns'
import { UserContext } from './../UserContext'

const SinglePost = () => {
   const postId = useParams().id;
   const [postData, setPostData] = useState(null);
   const { userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch(`http://localhost:5000/post/${postId}`)
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
            {
                userInfo.username === postData.author.username && (
                    <div className='edit-row'><Link to={`/edit/${postData._id}`} className='edit-post'>Edit Post</Link></div>
                )
            }
        <div className="image">
            <img src={`http://localhost:5000/${postData.cover}`} alt="img" />
        </div>
        <div dangerouslySetInnerHTML={{__html:postData.content}}/>
    </div>
  )
}

export default SinglePost