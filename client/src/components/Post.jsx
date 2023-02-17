import React from 'react'
import './../App.css'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'

const Post = ({ title, summary, cover, createdAt, author, _id }) => {
  return (
    <div className="post" id='post-row'>
    <div className="image">
      <Link to={`/post/${_id}`} className='post-link'><img id='cover' src={'http://localhost:5000/'+cover} alt="blog-post-image" /></Link>
    </div>
    <div className="texts">
      <Link to={`/post/${_id}`} className='post-link'><h2>{title}</h2></Link>
      <p className="info">
        <a href="#" className="author">{author}</a>
        <time>{format(new Date(createdAt), 'MMM d yyyy HH:mm')}</time>
      </p>
      <p className='summary'>{summary.slice(0,100)}<Link to={`post/${_id}`} className='sum' style={{marginLeft:'5px', color:'#551A8B', textDecoration:'none'}}>Read More</Link></p>
    </div>
  </div>
  )
}

export default Post