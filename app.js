const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const url = `mongodb://127.0.0.1:27017/mayurdb`;
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const con = mongoose.connection
con.on('open', () => {
    console.log("Connected to DB");
})

const alienRouter = require("./routers/aliens");
app.use('/aliens', alienRouter);



app.listen('3000', () => {
    console.log("running on port 3000");
})