import React, { useState, useEffect } from 'react'
import './../App.css'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useNavigate, useParams } from 'react-router-dom'

const EditPost = () => {

  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  const [postData, setPostData] = useState('');
  const navigate = useNavigate();
  const postId = useParams().id;

  useEffect(() => {
    fetch(`http://localhost:5000/post/${postId}`)
        .then(res => {
            res.json().then(postInfo => {
                setTitle(postInfo.title)
                setSummary(postInfo.summary)
                setContent(postInfo.content)
            })
        })
  }, [])

  const updatePost = async(e) => {
    const postData = new FormData();
    postData.set('title', title);
    postData.set('summary', summary);
    postData.set('content', content);
    postData.set('id',postId);
    if(files?.[0]){
        postData.set('file', files?.[0]);
    }

    e.preventDefault();
    
    const response = await fetch('http://localhost:5000/post/update', {
      method: 'PUT',
      body: postData,
      credentials: 'include',
    })
    
    if(response.ok) {
      navigate(`/post/${postId}`)
    }

  }


  return (
    <div className="create-post-container">
      <form onSubmit={updatePost}>
        <input type="title" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="summary" placeholder='Summary' value={summary} onChange={(e) => setSummary(e.target.value)} />
        <input type="file" onChange={e => setFiles(e.target.files)} />
        <ReactQuill value={content} onChange={newVal => setContent(newVal)} />
        <button type='submit' style={{ marginTop: '5px' }}>Update Post</button>
      </form>
    </div>
  )
}

export default EditPost