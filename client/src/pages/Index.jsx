import React, { useEffect, useState } from 'react'
import Post from '../components/Post'


const Index = () => {

  const [posts,setPosts] = useState({})

  useEffect(() => {
    fetch('http://localhost:5000/allposts').then(res => {
      res.json().then(posts => {
        setPosts(posts)
      })
    })
  }, [])

  return (
    <>
        {posts.length > 0 && posts.map(post => (
          <Post key={post.createdAt} {...post} />
        ))}
    </>
  )
}

export default Index