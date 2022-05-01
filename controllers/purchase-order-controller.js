let POS = [ ]

const PODao = require("../database/PO/PO-dao")
const userDao = require("../database/user/user-dao");

// Returns array of JSON objects
const getAllPOs = async (req, res) => {
    const POS = await PODao.findAllPOs();
    res.json(POS)
}

// send JSON object
const addOrder = async (req, res) => {
    const order = req.body;
    const newOrder = await PODao.createPO(order);
    res.json(newOrder);
}

// send JSON {PONumber: 12345}, return JSON with that order
const findByPONumber = (req, res) => {
    const PONumber = req.body;
    const order = POS.find(PO => PO.PONumber === PONumber.PONumber);
    if (order){
        res.json(order)
        return
    } else {
        res.sendStatus(404)
    }
}

const findAddedBy = (req, res) => {
    const username = req.body;
    const orders = POS.filter(PO => PO.addedBy === username.username);
    if (orders){
        res.json(orders)
        return
    } else {
        res.sendStatus(404)
    }
}

const deleteOrder = async (req, res) => {
    const order = POS.find(PO => PO.PONumber === PONumber.PONumber);
    const po = req.params['pid'];
    const status = await PODao.deletePO(po)
    if(status){
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
}

const updateOrder = async (req, res) => {
    const pid = req.params['pid'];
    console.log("PID" + pid)
    const updatedOrder = req.body;
    const status = await PODao.updatePO(pid, updatedOrder);
    res.sendStatus(200);
}

const PurchaseOrders = (app) => {
    app.get('/api/pos', getAllPOs);
    app.post('/api/create/order', addOrder)
    app.get('/api/find/order', findByPONumber)
    app.get('/api/added/by', findAddedBy)
    app.delete('/api/remove/order/:pid', deleteOrder);
    app.put('/api/update/order/:pid', updateOrder);

}

module.exports = PurchaseOrders;