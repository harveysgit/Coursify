require('dotenv').config()
console.log(process.env.MONGO_URL)
const express = require('express');
const app = express();

const { userRouter }  = require('./routes/user');
const { courseRouter } = require('./routes/course');
const { adminRouter } = require('./routes/admin');

app.use('/api/v1/user', userRouter);
app.use('/api/v1/course', courseRouter);
app.use('/api/v1/admin', adminRouter);

const mongoose = require('mongoose');
// await mongoose.connect("mongodb+srv://harveygiri023:0rHVPUir6MrJCGv3@cluster0.h8qmpql.mongodb.net/coursify")

async function main() {
    await mongoose.connect("mongodb+srv://harveygiri023:0rHVPUir6MrJCGv3@cluster0.h8qmpql.mongodb.net/coursify")
    app.listen(3000);
    console.log("listening on port 3000")
}

main()