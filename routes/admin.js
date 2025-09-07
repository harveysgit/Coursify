const {Router} = require('express');
const adminRouter = Router();

adminRouter.post('/Signin',function(req, res){
    res.json({
        message: "Admin signed in"
    })
})

adminRouter.post('/Signup',function(req, res){
    res.json({
        message: "Admin signed up"
    })
})

adminRouter.post('/Create', function(req, res){
    message: "Course added"
})

adminRouter.delete('/Delete',function(req, res){
    res.json({
        message: "Course Deleted"
    })
})

adminRouter.post('/Content', function(req, res){
    res.json({
        message: "Content added"
    })
})

module.exports = {
    adminRouter: adminRouter
}




