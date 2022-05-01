let POS = [ {"status":"PROOFED",
    "PONumber":"12345",
    "client":"Dana L",
    "dueDate":"2022-04-26",
    "quantity":"500",
    "address":"154 Walnut St",
    "state":"MA",
    "zip":"02145",
    "_id": 1650923285340,
    "addedBy": "mamero",
    "updateDate" : "2022-04-25",
    "updatedBy" : "mamero",
    "location":[
        {"location":"Full Front","flashes":"1","colors":"1"},
        {"location":"Full Back","flashes":"2","colors":"2"}
    ],
    "dateAdded":"2022-3-24"}]

// Returns array of JSON objects
const getAllPOs = (req, res) => {
    res.json(POS)
}

// send JSON object
const addOrder = (req, res) => {
    const order = req.body;
    POS.push(order);
    res.json(order);
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

const deleteOrder = (req, res) => {

    POS.map(p => console.log(req.params.pid === p._id.toString()))
    const pid = req.params.pid;
    POS = POS.filter(p => p._id.toString() !== pid.toString());
    res.json(POS);
}

const PurchaseOrders = (app) => {
    app.get('/api/pos', getAllPOs);
    app.post('/api/create/order', addOrder)
    app.get('/api/find/order', findByPONumber)
    app.get('/api/added/by', findAddedBy)
    app.delete('/api/remove/order/:pid', deleteOrder);

}

module.exports = PurchaseOrders;