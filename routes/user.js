const {Router} = require('express');
const userRouter = Router();

        userRouter.post('/login', function(req, res){
        res.json({
            message: 'You are signed in'
        })
    })

        userRouter.post('/signup', function(req, res){
            res.json({
                message: 'You are signed up'
            })
        })

        userRouter.get('/preview', function(req, res){
            res.json({
                message: 'all the purchsed courses'
            })
        })

module.exports =  {
    userRouter: userRouter
}