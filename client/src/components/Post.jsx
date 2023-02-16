import React from 'react'
import '../App.css'
import { format } from 'date-fns'

const Post = ({ title, summary, content, cover, createdAt }) => {
  return (
    <div className="post">
    <div className="image">
      <img src="https://res.cloudinary.com/primeflix/image/upload/v1674554007/download_w0satf.jpg" alt="blog-post-image" />
    </div>
    <div className="texts">
      <h2>{title}</h2>
      <p className="info">
        <a href="#" className="author">Afzal Khan</a>
        <time>{format(new Date(createdAt), 'MMM d yyyy HH:mm')}</time>
      </p>
      <p className='summary'>{summary}</p>
    </div>
  </div>
  )
}

export default Post