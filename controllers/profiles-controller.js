let users = []

const userDao = require("../database/user/user-dao")

const register = async (req, res) => {
    let credentials = req.body;
    req.session['user'] = credentials;
    const newUser = await userDao.register(credentials)
    res.json(newUser);
}

const getAllUsers = async (req, res) => {
    const users = await userDao.findAllUsers();
    res.json(users);
}

const login = (req, res) => {
    const credentials = req.body;
    const profile = users.find(user => user.username === credentials.username &&
    user.password === credentials.password);
    if (profile) {
        req.session['user'] = profile;
        res.json(profile);
        return;
    }else {
        res.sendStatus(403);
    }
}

const getCurrentUser = (req, res) => {
    res.json(req.session['user']);
}

const logout = (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
}
/*
const getById = (req, res) => {
    const uid = req.body._id;
    const profile = users.find(user => user._id === uid);
    if (profile) {
        res.json(profile)
        return;
    } else {
        res.sendStatus(404)
    }

}
*/

const removeUser = async (req, res) => {
    const uid = req.params.uid;
    const status = await userDao.removeUser({_id: uid});
    if(status){
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }

}

const updateProfile = async (req, res) => {
    const uid = req.params['uid'];
    const updatedProfile = req.body;
    const status = userDao.updateProfile(uid, updatedProfile);
    res.sendStatus(200);
}

const profiles = (app) => {
    app.post('/api/register', register);
    app.get('/api/users', getAllUsers);
    app.get('/api/login', login);
    app.get('/api/get/user', getCurrentUser);
    app.get('/api/logout', logout);
  //  app.get('/api/find/user', getById);
    app.delete('/api/remove/user/:uid', removeUser);
    app.put('/api/update/user/:uid', updateProfile);
}

module.exports = profiles;