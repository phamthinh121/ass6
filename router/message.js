const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/message', async (req, res, next) => {
    const nameValue= req.body.name;
    const emailValue=req.body.email;
    const subjectValue=req.body.subject;
    const messageValue=req.body.message;
    try{
        const user=new User({ 
            name: nameValue,
            email: emailValue,
            subject:subjectValue,
            message:messageValue
        });
        await user.save()
        res.status(201).json({
            user: user
        })
    } catch(e) {
        res.status(404).json({
            error: e.message
        })
    }
    
    


    res.status(201).json({mate: 'asdas'})
})

module.exports = router;