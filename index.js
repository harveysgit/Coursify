const express = require('express');
var jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const app = express();

app.post('/user login', function(req, res){
    res.send({
        message: 'You are signed in';
    })
})

app.post('/user signup', function(req, res){
    res.send({
        message: 'You are signed up'
    })
})

app.get('/user/purchases', function(req, res){
    res.send({
        message: ''
    })
})

app.get('/course/purchase',function(req,res){
    res.send({
        message:'Your purchased courses'
    })
})

app.get('/courses', function(req, res){
    res.send({
        message: ''
    })
})

app.listen(3000);
