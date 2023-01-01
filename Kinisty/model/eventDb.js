const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let eventDb = new Schema(
{
    eventName                       : { type: String, required: false},
    eventDate                       : { type: Date  , required: false},
    eventStartHour                  : { type: Date  , required: false},
    eventEndHour                    : { type: Date  , required: false},
    eventDescription                : { type: String, required: false},
    ticketPriceForFirstSection      : { type: Number, required: false},
    ticketPriceForMediumSection     : { type: Number, required: false},
    ticketPriceForLastSection       : { type: Number, required: false},
    organizerName                   : { type: String, required: false},
    organizerEmail                  : { type: String, required: false}, 
    organizerPhoneNumber            : { type: String, required: false},
    organizerDateOfBirth            : { type: String, required: false}, 
    organizerGender                 : { type: String, required: false},
},
{ collection: " Event"}
);

module.exports = eventDb = mongoose.model("Event", eventDb);