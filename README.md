
# Bloggo

Bloggo is a full stack blogging app , anyone can create and publish their own blog posts.

try bloggo(https://blog-c40q.onrender.com/)


## Screenshots
Home
![App Screenshot](https://res.cloudinary.com/primeflix/image/upload/v1676613475/Home_tifrfh.png)

Post Page
![Post Page](https://res.cloudinary.com/primeflix/image/upload/v1676613474/Post1_syygu7.png)



Create Post Page

![Create Post Page](https://res.cloudinary.com/primeflix/image/upload/v1676613474/Create_qklr79.png)
## Video Demo

[![IMAGE ALT TEXT](http://img.youtube.com/vi/QrFr2vDReVE/0.jpg)](http://www.youtube.com/watch?v=QrFr2vDReVE "Video Title")



## Deployment

## NOTE : change the MONGO_URI in .env file

To deploy this project clone the server and main branch

```bash
  git clone -b main https://github.com/AFZL210/Bloggo.git
  mkdir blog-server
  cd blog-server
  git clone -b server https://github.com/AFZL210/Bloggo.git
```

install all the dependencies
```bash
  cd Bloggo
  npm install
  cd blog-server/Bloggo
  npm install
```

run the server
```bash
  cd blog-server/Bloggo
  npm run dev
```

run the client app
```bash
  cd Bloggo
  npm start
```


## Tech Stack

**Client:** React, ContextAPI, MaterialUI, react-quill

**Server:** Node, Express, JWT

**Database:** MongoDB Atlas


## Todo
- [X] fix auth
- [X] add create post page
- [X] add loader
- [] add edit post page
- [] add user profile
- [] like post
- [] add categories and tags
