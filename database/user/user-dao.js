const userModel = require("./user-model");

const findAllUsers = async  () => {
    const users = await userModel.find();
    return users;
}

const register = async (profile) => {
    const newUser = await userModel.create(profile)
    return newUser;
}

const removeUser = async (uid) => await userModel.deleteOne({_id: uid})

const updateProfile = async (uid, profile) => {
    const status = await userModel.updateOne({_id: uid},{$set: profile});
    return status;

}
module.exports = {
    findAllUsers, register, removeUser, updateProfile
}
