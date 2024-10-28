const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : {type : String , required: true},
    lastName : {type : String},
    email : {type : String, unique : true},
    jobTitle : {type : String},
},{timestamps : true});

const Users = mongoose.model("users",userSchema);

module.exports = Users;

