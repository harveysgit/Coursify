const express = require('express')
const courseRouter = express.Router();

    courseRouter.post("/purchase", function(req, res){
        res.json({
            message: "your purchased courses"
        })
    }) 

    courseRouter.get('/preview', function(req, res){
        res.json({
            message: "all courses"
        })
    })

module.exports = {
    courseRouter: courseRouter
}
