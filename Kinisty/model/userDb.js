const mongoose = require("mongoose");
const competitionDb = require("./competitionDb");
const Schema = mongoose.Schema;

let userDb = new Schema(
{
    firstName   : { type: String, required: false},
    secondName  : { type: String, required: false},
    email       : { type: String, required: false},
    phoneNumber : { type: String, required: false},
    dateOfBirth : { type: Date,   required: false},
    gender      : { type: String, required: false},
    userName    : { type: String, required: false},
    password    : { type: String, required: false},
    schoolLevel : { type: String, required: false},
    status      : { type: String, required: false},
    rankOfDeacon: { type: String, required: false}, 
    points      : { type: Number, required: false},
    answer      : { type: Object, required: false},
},
{ collection: "User" }
);

module.exports = userDb = mongoose.model("users", userDb);