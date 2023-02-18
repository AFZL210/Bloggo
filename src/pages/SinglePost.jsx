import './../App.css'
import React, { useEffect, useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { format } from 'date-fns'
import { UserContext } from './../UserContext'
import { FallingLines } from 'react-loader-spinner'

const SinglePost = () => {
   const postId = useParams().id;
   const [postData, setPostData] = useState(null);
   const { userInfo } = useContext(UserContext);
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_HEAD}/post/${postId}`)
        .then(res => {
            res.json().then(postData => {
                setPostData(postData);
                setLoading(false)
            })
        })
  }, [])  



  return (
    <div className='post-container'>
        {loading ? (<div style={{ width: '100%', height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><FallingLines
        color="#551A8B"
        width="60"
        visible={true}
        ariaLabel='falling-lines-loading'
      /></div>) : (
            <>
            <h1>{postData.title}</h1>
                <time>{format(new Date(postData.createdAt), 'MMM d yyyy HH:mm')}</time>
                <p className='author'>by @{postData.author.username}</p>
                {
                    userInfo.username === postData.author.username && (
                        <div className='edit-row'><Link to={`/edit/${postData._id}`} className='edit-post'>Edit Post</Link></div>
                    )
                }
            <div className="image">
                <img src={`${process.env.REACT_APP_SERVER_HEAD}/${postData.cover}`} alt="img" />
            </div>
            <div dangerouslySetInnerHTML={{__html:postData.content}}/>
            </>
        )}
    </div>
  )
}

export default SinglePost
