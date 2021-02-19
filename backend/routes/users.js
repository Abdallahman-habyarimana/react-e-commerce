const express = require('express')
const _ = require('lodash')
const bcrypt = require('bcryptjs');
const mongoose = require("mongoose");
const { User } = require('../model/userModel');
const auth = require('../middleware/auth');
const router = express.Router()

// Getting the current user
router.get('/me', auth, async (req, res) => {
    // req.user._id comes from authentication
    const user = await User.findById(req.user._id).select('-password');
    res.send(user)
})


router.post('/', async(req, res) => {
    
    const  { name, email, password } = req.body;

    let user = await User.findOne({ email })
    if(user){
        res.status(400)
        throw new Error('User Already exists')
    }

    user = new User({
        name,
        email,
        password
    })

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    const token = user.generateAuthToken();
    res
        .header('x-auth-token', token)
        .header("access-control-expose-headers", "x-auth-token")
        .send(_.pick(user, ["_id", "name", "email"]));
})

module.exports = router