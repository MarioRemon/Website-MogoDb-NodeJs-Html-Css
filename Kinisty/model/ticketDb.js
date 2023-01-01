const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ticketDb = new Schema(
{
    ticketNumber            : { type: Number, required: false},
    clientName              : { type: String,   required: false},
    eventName               : { type: String,   required: false},
    seatNum                 : { type: Number, required: false},
    price                   : { type: Number, required: false},
    eventDate               : { type: Date, required: false},
},
{ collection: " Ticket"}
);

module.exports = ticketDb = mongoose.model("Ticket", ticketDb);