const mongoose = require("mongoose");

const Pastry = mongoose.Schema({
    icon:String,
    title:String,
    description:String,
    linkText:String,
    link:String
})

module.exports = mongoose.model("pastry", Pastry);