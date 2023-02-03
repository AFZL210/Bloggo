const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken')
const User = require('./models/User');
const cookieParser = require('cookie-parser');


const salt = bcrypt.genSaltSync(10);
const secret = 'sdhx67agyhs'

app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser())

mongoose.connect('mongodb+srv://BLOGGO123:wD0JgC0h7cw5obuL@bloggo-cluster.dr2synp.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('connected'))
.catch((e) => console.log(e))

app.post('/register', async (req,res) => {
    const {username,password} = req.body;

    try{
        const UserDoc = await User.create({username,
            password: bcrypt.hashSync(password,salt)
        })
        res.json(UserDoc)
    } catch(e) {
        res.status(400).json(e)
    }

})


app.post('/login', async (req,res) => {
    const {username,password} = req.body;

    const UserDoc = await User.findOne({username})
    const passFlag = bcrypt.compareSync(password,UserDoc.password)
    
    if(passFlag) {
        jwt.sign({username,id:UserDoc._id}, secret, {}, (err,token) => {
            if(err) throw err;
            res.cookie('token',token).json('ok')
        })
    }else{
        res.status(400).json("wrong credentials")
    }
})


app.get('/profile', (req,res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err,info) => {
        if(err) throw err;
        res.json(info)
    })
})


app.listen(4000,() => {
    console.log("listening at PORT",4000)
})

// mongodb+srv://BLOGGO123:wD0JgC0h7cw5obuL@bloggo-cluster.dr2synp.mongodb.net/?retryWrites=true&w=majority