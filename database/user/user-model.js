const mongoose = require("mongoose");
const userSchema = require("../user/user-schema");

const userModel = mongoose.model("UserModel", userSchema);
module.exports = userModel;