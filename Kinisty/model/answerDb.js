const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let answerDb = new Schema(
{
    userName                : { type: Object, required: false},
    competitionName         : { type: String, required: false},
    competitionStartDate    : { type: Date,   required: false},
    competitionEndDate      : { type: Date,   required: false},
    question1               : { type: String, required: false},
    question1Answer         : { type: String, required: false},
    question2               : { type: String, required: false}, 
    question2Answer         : { type: String, required: false},
    question3               : { type: String, required: false}, 
    question3Answer         : { type: String, required: false},
    question4               : { type: String, required: false}, 
    question4Answer         : { type: String, required: false},
    question5               : { type: String, required: false}, 
    question5Answer         : { type: String, required: false},
},
{ collection: " Answer"}
);

module.exports = answerDb = mongoose.model("Answer", answerDb);