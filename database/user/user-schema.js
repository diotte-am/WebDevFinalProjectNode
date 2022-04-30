const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username : String,
    name : String,
    password : String,
    department : String,
    phonenumber : String,
    extension : String,
    email : String,
    dateofhire : Date,
    dateofbirth : Date,
    fullTime : Boolean
}, {collection: 'users'})
module.exports = userSchema;