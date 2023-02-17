import React, { useEffect, useState } from 'react'
import Post from '../components/Post'
import { FallingLines } from 'react-loader-spinner'


const Index = () => {

  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://test-r6ym.onrender.com/allposts`).then(res => {
      res.json().then(posts => {
        setPosts(posts);
        setLoading(false);
      })
    })
  }, [])

  return (
    <>
      {loading ? (<div style={{ width: '100%', height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><FallingLines
        color="#551A8B"
        width="60"
        visible={true}
        ariaLabel='falling-lines-loading'
      /></div>) : (
        <>
          {
            posts.map(post => (
              <Post key={post.createdAt} {...post} author={post.author.username} />
            ))
          }
        </>
      )}
    </>
  )
}

export default Index