import React, { useState } from 'react'
import './../App.css'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Navigate, useNavigate } from 'react-router-dom'

const CreatePost = () => {

  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  const navigate = useNavigate();

  const createNewPost = async(e) => {
    const postData = new FormData();
    postData.set('title', title);
    postData.set('summary', summary);
    postData.set('content', content);
    postData.set('file', files[0]);

    e.preventDefault();
    
    const response = await fetch(`${process.env.REACT_APP_API_HEAD}/post/newpost`, {
      method: 'POST',
      body: postData,
      credentials: 'include',
    })
    
    if(response.ok) {
      navigate('/')
    }

  }


  return (
    <div className="create-post-container">
      <form onSubmit={createNewPost}>
        <input type="title" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="summary" placeholder='Summary' value={summary} onChange={(e) => setSummary(e.target.value)} />
        <input type="file" onChange={e => setFiles(e.target.files)} />
        <ReactQuill value={content} onChange={newVal => setContent(newVal)} />
        <button type='submit' style={{ marginTop: '5px' }}>Create Post</button>
      </form>
    </div>
  )
}

export default CreatePost