const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let weddingDb = new Schema(
{
    clientFirstName                 : { type: String  , required: false},
    clientLastName                  : { type: String  , required: false},
    clientEmail                     : { type: String  , required: false},
    clientPhoneNumber               : { type: String  , required: false},
    clientAddress                   : { type: String  , required: false},
    date                            : { type: String  , required: false},
    numberOfGuests                  : { type: Number  , required: false},
},
{ collection: "Wedding"}
);

module.exports = weddingDb = mongoose.model("Wedding", weddingDb);