const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken')
const User = require('./models/User');
const cookieParser = require('cookie-parser');
require('dotenv')


const mongo_uri = process.env.MONGO_URI
const salt = bcrypt.genSaltSync(10);
const secret = 'afzl210abc'

app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser())

mongoose.connect(`mongodb+srv://BLOGGO123:wD0JgC0h7cw5obuL@bloggo-cluster.dr2synp.mongodb.net/?retryWrites=true&w=majority`)
.then(() => console.log('connected'))
.catch((e) => console.log(e))

app.post('/register', async (req,res) => {
    
})


app.post('/login', async (req,res) => {
   
})



app.listen(4000,() => {
    console.log("listening at PORT",4000)
})