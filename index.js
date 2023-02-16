const express = require('express');
const app = express();
const PORT = 5000 || process.env.PORT;
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.json())
app.use(cookieParser())
const salt = bcrypt.genSaltSync(10)
const secret = 'abc123xyz'

mongoose.connect(`mongodb+srv://BLOGGO123:wD0JgC0h7cw5obuL@bloggo-cluster.dr2synp.mongodb.net/?retryWrites=true&w=majority`)
.then(() => console.log("connected"))
.catch(e => console.log(e))


app.post('/user/register', asyncHandler(async(req,res) => {
    const { username, password } = req.body;

    try{
        const newUser = await User.create({username,password: bcrypt.hashSync(password, salt)})
        res.json(newUser)
    } catch(e) {
        res.status(400).json(e);
    }
}))


app.post('/user/login', async(req,res) => {
    const { username, password } = req.body;
    const loginUser = await User.findOne({username});
    const passCheck = bcrypt.compareSync(password, loginUser.password)
    
    if(passCheck) {
        jwt.sign({ username, id:loginUser._id }, secret, {}, (err,token) => {
            if(err) throw err;
            res.cookie('token',token).json('ok')
        })
    } else {
        res.status(400).json('wrong credentials');
    }
})


app.get('/user/profile', async(req,res) => {
    const { token } = req.cookies;
    jwt.verify(token, secret, {}, (err,info) => {
        if(err) throw err;
        res.json(info)
    })
})


app.post('/user/logout', async(req,res) => {
    res.cookie('token','').json('ok')
})

app.listen(PORT, () => {
    console.log(`Listening at PORT ${PORT}`)
})