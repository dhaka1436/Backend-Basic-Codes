const express = require("express");
const app = express();
const fs = require("fs");

const userRouter = require("./routes/user")
const {connectMongoDb} = require("./connection");
const {logRequestResponse} = require("./middlewares");


connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-demo")

app.use(express.urlencoded({extended : false}));
app.use(logRequestResponse("logs.txt"));
app.use("/api/users",userRouter);

app.listen(8000,() => {console.log("running done")})