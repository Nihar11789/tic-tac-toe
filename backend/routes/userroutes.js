const express = require('express');
const { SigninUser, Loginuser } = require('../controller/usercontroller');

const Userrouter = express.Router();

Userrouter.post("/register",SigninUser)
Userrouter.post("/login",Loginuser)

module.exports = {Userrouter}