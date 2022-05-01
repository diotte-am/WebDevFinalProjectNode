const mongoose = require("mongoose");

const POSchema = mongoose.Schema({
    status: String,
    PONumber:String,
    client:String,
    dueDate: Date,
    quantity:Number,
    address:String,
    state:String,
    zip: String,
    addedBy: String,
    updateDate:Date,
    updatedBy:String,
    location:
        [{location: String,
            flashes: Number,
            colors: Number
        }],
    dateAdded:Date
}, {collection: 'pos'})

module.exports = POSchema;