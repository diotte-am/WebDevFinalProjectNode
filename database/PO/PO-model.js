const mongoose = require("mongoose");
const POSchema = require("../PO/PO-schema");

const POModel = mongoose.model("POModel", POSchema);
module.exports = POModel;

