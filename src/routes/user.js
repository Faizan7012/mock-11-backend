const express = require('express');
const { createUser, loginUser } = require('../controller/user');
const UR = express.Router();

UR.get('/',async(req, res)=>{
    res.send('hello from user')
})

UR.post('/signup', createUser)
UR.post('/login', loginUser)



module.exports = UR