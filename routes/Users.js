const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const bcrypt = require('bcrypt');

router.post('/', async(req, res) => {
    const {username, email, password} = req.body;
    const user = await Users.findOne({ where: {email: email} })
    if(user) return res.status(401)
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            username: username, 
            email: email, 
            password: hash,
        });
        res.status(200)
    });

});


router.post('/login', async(req, res) => {
    const {email, password} = req.body;
    const user = await Users.findOne({ where: {email: email} })
    if(!user) return res.status(401)
    bcrypt.compare(password, user.password).then((match) => {
        if(!match) return res.json(401)
        res.json("YEEP!")
    })

});

module.exports = router;