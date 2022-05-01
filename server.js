const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const PODao = require("./database/PO/PO-dao");

const app = express();
mongoose.connect('mongodb://localhost:27017/WebDevFinalProjectDB');

app.use(express.json());
app.use(cors());
app.use(session({
    secret: "secret",
    cookie: {secure: false}
}))



PODao.deletePO("626ea6051edf379a71a03cd4")

const userProfiles = require("./controllers/profiles-controller")
userProfiles(app);

const purchaseOrders = require("./controllers/purchase-order-controller")
purchaseOrders(app);

app.listen(4000);

