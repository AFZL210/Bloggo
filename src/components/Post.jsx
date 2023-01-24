import React from 'react'
import '../App.css'

const Post = () => {
  return (
    <div className="post">
    <div className="image">
      <img src="https://res.cloudinary.com/primeflix/image/upload/v1674554007/download_w0satf.jpg" alt="blog-post-image" />
    </div>
    <div className="texts">
      <h2>SpaceX starship is ready to takeoff in 2023</h2>
      <p className="info">
        <a href="#" className="author">Afzal Khan</a>
        <time>2023-03-24 16:34</time>
      </p>
      <p className='summary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet laborum veniam nostrum ipsa exercitationem quos quisquam laudantium tenetur consectetur vero!</p>
    </div>
  </div>
  )
}

export default Post