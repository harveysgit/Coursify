const express = require("express");
const adminRouter = express.Router();

console.log("connect to the database");
const adminModel = require('../db');

adminRouter.post('/signin',function(req, res){
    res.json({
        message: "Admin signed in"
    })
})

adminRouter.post('/signup',function(req, res){
    res.json({
        message: "Admin signed up"
    })
})

adminRouter.post('/course', function(req, res){
    message: "Course added"
})

adminRouter.put('/course',function(req, res){
    res.json({
        message: "Course Deleted"
    })
})

adminRouter.delete('/course', function(req, res){
    res.json({
        message: "Content added"
    })
})

adminRouter.get('/course/bulk', function(req, res){
    res.json({
        message: "Content added"
    })
})

module.exports = {
    adminRouter: adminRouter
}




