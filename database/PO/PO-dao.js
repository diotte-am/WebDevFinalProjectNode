const POModel = require("./PO-model");



const findAllPOs = async () => {
    const pos = await POModel.find();
    return pos;
}

const createPO = async (order) => {
    const newPO = await POModel.create(order)
    return newPO;
}

const deletePO = async (pid) => {
    const status = await POModel.deleteOne({_id: pid})
    return status;
}

const updatePO = async (pid, order) => {
    const status = await POModel.updateOne({_id: pid}, {$set: order});
    return status;
}


module.exports = {
    findAllPOs, createPO, deletePO, updatePO
}
