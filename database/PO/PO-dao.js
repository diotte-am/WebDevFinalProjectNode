const POModel = require("./PO-model");



const findAllPOs = async () => {
    const pos = await POModel.find();
    return pos;
}

const createPO = async (order) => {

}

const deletePO = async (pid) => {
    await POModel.deleteOne({_id: pid})
}

const updatePO = async (pid, order) => {

}


module.exports = {
    findAllPOs, createPO, deletePO, updatePO
}
